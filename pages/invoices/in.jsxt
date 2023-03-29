import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import CurrencyFormat from 'react-currency-format'
import Link from 'next/link'
import { Table } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { getCurrency } from '../../utils'

import CustomButton from '../../components/CustomButton'

import dayjs from 'dayjs'

import Loading from '../../components/Loading'
import { getSimplifiedError } from '../../utils/error'
import { PDFDownloadLink } from '@react-pdf/renderer/lib/react-pdf.browser.es.js'
// const InvoicePdf = dynamic(() => import('../../components/invoice-pdf'), { ssr: false })

import InvoicePdf from 'components/invoice-pdf'

const InvoiceDetails = () => {
  const router = useRouter()
  const query = router.query
  const [data, setData] = useState(null)
  const [showPay, setShowPay] = useState(false)
  const [loading, setLoading] = useState(false)
  const [processing, setProcessing] = useState(false)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const getInvoiceDetails = (query) => {
    setLoading(true)
    axios
      .get(`https://api.bujeti.com/public/invoices/${query?.id}`, config)
      .then(({ data }) => {
        setData(data.data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        toast.error(getSimplifiedError(error))
        if (error?.response?.status === 404) {
          setTimeout(() => {
            window.location.replace('/')
          }, 2000)
        }
      })
  }

  useEffect(() => {
    if (query.id) {
      getInvoiceDetails(query)
    }
  }, [query])

  const config = {
    headers: {
      Authorization: `Bearer ${query?.id}`,
    },
  }

  useEffect(() => {
    const statusData = JSON.parse(window.localStorage.getItem('processing')) ?? {}
    if (query.code === statusData?.id) {
      setProcessing(statusData?.processing ?? false)
    }
  }, [query])

  if (loading) return <Loading isPage={true} color="#d28b28" />

  return (
    <section className="invoice-create-wrapper customers">
      <ToastContainer />
      {showPay ? (
        <PaymentMethod goBack={() => setShowPay(false)} total={data} />
      ) : (
        <section>
          <main className="invoice-preview-wrapper">
            <div className="invoice-preview">
              <header className="bg-secondary-50 border-12">
                <div className="header flex justify-between">
                  <span>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.5 20H8.93212C11.1119 20 12.7467 19.4729 13.8652 18.4187C14.9551 17.3939 15.5 16.1054 15.5 14.5827C15.5 12.2694 14.0123 10.4978 11.8039 10C13.8652 9.39351 14.9837 7.46706 14.9837 5.35871C14.9837 3.8653 14.4388 2.57687 13.3489 1.55198C12.2591 0.527087 10.6243 0 8.44455 0H0.5V4.79675H4.96809V2.03252L12.1489 6.01626L4.96809 10V7.23577H0.5V12.7642H4.96809V10L12.1489 13.9837L4.96809 17.9675V15.2033H0.5V20Z"
                        fill="#586068"
                      />
                    </svg>
                  </span>
                  <div className="rhs flex flex-col">
                    {data?.status === 'paid' && !processing && (
                      <span className="is-paid">PAID</span>
                    )}
                    {data?.status !== 'paid' && processing && (
                      <span className="is-processing">PROCESSING</span>
                    )}
                    {data?.status !== 'paid' && !processing && (
                      <>
                        <span className="header-title">Invoice No.</span>
                        <span className="header-subtitle">{data?.code}</span>
                      </>
                    )}
                  </div>
                </div>
                <InvoicePresentationWrapper style={{ marginBottom: 20 }}>
                  <div className="lhs">
                    <div className="">
                      <h1 className="header-title">Issue Date</h1>
                      <p className="header-sub">{dayjs(data?.createdAt).format('DD-MMMM-YYYY')}</p>
                    </div>
                  </div>
                  <div className="rhs">
                    <div className="">
                      <h1 className="header-title">Due Date</h1>
                      <p className="header-sub">{dayjs(data?.due_date).format('DD-MMMM-YYYY')}</p>
                    </div>
                  </div>
                </InvoicePresentationWrapper>
                <InvoicePresentationWrapper>
                  <div className="lhs">
                    <div className="">
                      <h1 className="header-title">Bill From:</h1>
                      <p className="header-sub">{`${data?.company?.name}`}</p>
                    </div>
                    <p className="text mt-2">{data?.company?.contactEmail}</p>
                    <p className="text">{data?.company?.contact_phone}</p>
                  </div>
                  <div className="rhs">
                    <div className="">
                      <h1 className="header-title">Bill to:</h1>
                      <p className="header-sub">{`${data?.customer?.firstName} ${data?.customer?.lastName}`}</p>
                    </div>
                    <p className="text mt-2">{data?.customer?.email}</p>
                    <p className="text">{data?.customer?.phoneNumber?.localFormat}</p>
                  </div>
                </InvoicePresentationWrapper>
              </header>
              <main>
                <PreviewTable data={data} />
                <section className="flex justify-end pb-8">
                  <AmountInformation data={data} />
                </section>

                <section className="invoice-preview-footer mt-4">
                  <div className="action">
                    {isClient && (
                      <PDFDownloadLink
                        document={<InvoicePdf data={data && data} />}
                        fileName={`Invoice from ${data?.company?.name}${data?.code}_${dayjs(
                          data?.createdAt
                        ).format('DD-MMMM-YYYY')}.pdf`}
                        style={{
                          textDecoration: 'none',
                        }}
                      >
                        {({ blob, url, loading, error }) =>
                          loading ? (
                            'Loading document...'
                          ) : (
                            <span className="action-edit">Download Invoice</span>
                          )
                        }
                      </PDFDownloadLink>
                    )}

                    {data?.status !== 'paid' && (
                      <button onClick={() => setShowPay(true)}>Pay now</button>
                    )}
                  </div>
                </section>

                <section className="invoice-preview-footer">
                  <Footer />
                </section>
              </main>
            </div>
          </main>
        </section>
      )}
    </section>
  )
}

export default InvoiceDetails

const PaymentMethod = ({ goBack, total }) => {
  const [accountLoading, setAccountLoading] = useState(false)
  const [accountDetails, setAccountDetails] = useState(null)
  const [error, setError] = useState({
    error: false,
    message: '',
  })

  const router = useRouter()
  const query = router.query

  useEffect(() => {
    if (query.id) {
      getAccountNumbers(query)
    }
  }, [query])

  const getAccountNumbers = (query) => {
    setAccountLoading(true)
    axios
      .get(`https://api.bujeti.com/public/invoices/${query?.id}/get-account`, {
        headers: {
          Authorization: `Bearer ${query?.id}`,
        },
      })
      .then(({ data }) => {
        setAccountLoading(false)
        setAccountDetails(data.data)
      })
      .catch((error) => {
        setAccountLoading(false)
        if (error.response.status === 404) {
          setError({
            error: true,
            message:
              "This merchant hasn't generated an account number yet, please reach out to your merchant.",
          })
        }
      })
  }

  const onPaymentClick = () => {
    toast.success('Your payment is processing')
    const statusData = {
      id: query?.id,
      processing: true,
    }
    window.localStorage.setItem('processing', JSON.stringify(statusData))
    goBack()
  }

  if (accountLoading) return <Loading isPage={true} color="#d28b28" />
  return (
    <section className="payment-method">
      <header className="flex items-center justify-between">
        <span>
          <svg
            width="60"
            height="25"
            viewBox="0 0 60 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.0028 19.3026V17.6525C22.8699 18.8965 21.4201 19.515 19.6767 19.515C18.2086 19.515 16.989 19.0954 16.1383 18.2212C15.289 17.3484 14.8585 16.0753 14.8585 14.4718V5.33838H18.5816V14.2858C18.5816 15.1228 18.7824 15.6869 19.1171 16.0416C19.4479 16.3923 19.9676 16.5994 20.7421 16.5994C21.9711 16.5994 22.9889 16.0011 23.7815 14.6895V5.33838H27.5047V19.3026H24.0028ZM32.6476 5.33838V19.2524C32.6476 20.9212 32.2179 22.2705 31.3067 23.2483C30.3973 24.2243 29.0556 24.7792 27.335 24.9577L26.9268 25V22.1587L27.2299 22.1032C27.7975 21.9993 28.1972 21.7426 28.4642 21.3447C28.7386 20.9356 28.8978 20.3393 28.8978 19.518V5.33838H32.6476ZM32.2515 0.48673L32.2549 0.489656C32.6705 0.852268 32.86 1.39345 32.864 1.90312C32.8679 2.41139 32.6874 2.95045 32.2807 3.30314L32.2777 3.30568L32.2747 3.30816C31.869 3.64533 31.2958 3.79205 30.7627 3.79205C30.2308 3.79205 29.6599 3.64577 29.2647 3.30314C28.858 2.95045 28.6775 2.41139 28.6814 1.90312C28.6854 1.39345 28.8749 0.852268 29.2905 0.489656L29.2909 0.489281L29.2914 0.488908C29.6843 0.148226 30.2401 0 30.7627 0C31.2863 0 31.8446 0.148588 32.2481 0.483885L32.2515 0.48673ZM42.7055 14.6872H46.4828L46.3522 15.155C45.5808 17.9181 43.2283 19.515 40.0027 19.515C38.1537 19.515 36.5942 18.8968 35.3492 17.6836C34.0823 16.4491 33.4799 14.6385 33.4799 12.3205C33.4799 10.0039 34.0816 8.16603 35.3492 6.93075C36.5971 5.71473 38.158 5.12591 40.0027 5.12591C41.843 5.12591 43.3998 5.6851 44.6734 6.84221C45.9687 8.01891 46.5788 9.67034 46.5788 11.7893V13.1409H37.3095V13.4094C37.3095 14.683 37.6164 15.5713 38.0864 16.1349C38.5494 16.69 39.2047 16.9713 40.0027 16.9713C40.7269 16.9713 41.2808 16.7947 41.6978 16.4738C42.1156 16.1523 42.4323 15.6578 42.6298 14.9564L42.7055 14.6872ZM55.2005 7.88215H51.658V15.1357C51.658 15.8268 51.7982 16.2726 52.0154 16.5407C52.2201 16.7936 52.5395 16.9447 53.046 16.9447C53.4836 16.9447 54.1433 16.8461 55.0202 16.6606L55.4669 16.5661V18.9845L55.2172 19.0701C54.322 19.3769 53.4019 19.515 52.4334 19.515C50.9881 19.515 49.84 19.1934 49.0587 18.4143C48.2776 17.6355 47.9349 16.4709 47.9349 14.9498V7.88215H46.097V5.33838H47.9349V2.92517L51.658 1.96393V5.33838H55.2005V7.88215ZM59.7336 5.33838V19.3026H55.9839V5.33838H59.7336ZM59.3909 0.48673L59.3942 0.489656C59.8099 0.852291 60 1.39412 60 1.90598C60 2.41726 59.8099 2.95715 59.3874 3.30816C58.9815 3.64548 58.4082 3.79205 57.8721 3.79205C57.3372 3.79205 56.7653 3.64617 56.3596 3.31051C55.9238 2.96121 55.7242 2.42135 55.7242 1.90598C55.7242 1.38905 55.9246 0.845858 56.3556 0.484813L56.3562 0.484348L56.3567 0.483885C56.7627 0.14657 57.336 0 57.8721 0C58.4082 0 58.9815 0.14657 59.3874 0.483885L59.3909 0.48673ZM38.0326 8.391C37.5823 8.91391 37.3138 9.68865 37.3096 10.6768H42.6959C42.6918 9.64647 42.4219 8.87411 41.9748 8.36339C41.53 7.8554 40.8729 7.56344 40.0027 7.56344C39.1393 7.56344 38.4807 7.87068 38.0326 8.391ZM0 19.6714H7.81931C9.84063 19.6714 11.3566 19.1931 12.3939 18.2365C13.4045 17.3065 13.9099 16.1374 13.9099 14.7556C13.9099 12.6564 12.5303 11.0488 10.4824 10.5971C12.3939 10.0467 13.4311 8.2986 13.4311 6.38541C13.4311 5.03023 12.9258 3.86106 11.9151 2.93104C10.9045 2.00102 9.3885 1.52272 7.36718 1.52272H0V5.87546H4.14337V3.3671L10.8023 6.98209L4.14337 10.5971V8.08872H0V13.1054H4.14337V10.5971L10.8023 14.2121L4.14337 17.8271V15.3187H0V19.6714Z"
              fill="black"
            />
          </svg>
        </span>
        <div className="link flex">
          <span>© Bujeti Ltd. 2022, All Rights Reserved</span>
          <Link href="https://www.twitter.com/bujeti">
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.03344 13.5C11.0697 13.5 14.3722 8.4978 14.3722 4.16124C14.3722 4.02062 14.3691 3.87687 14.3628 3.73624C15.0052 3.27164 15.5597 2.69617 16 2.03687C15.4017 2.30307 14.7664 2.47692 14.1159 2.55249C14.8009 2.14194 15.3137 1.49698 15.5594 0.737178C14.915 1.11904 14.2104 1.38841 13.4756 1.53374C12.9806 1.00771 12.326 0.659411 11.6131 0.542701C10.9003 0.42599 10.1688 0.547367 9.53183 0.888064C8.89486 1.22876 8.38787 1.7698 8.08923 2.42754C7.7906 3.08528 7.71695 3.82308 7.87969 4.52687C6.575 4.46139 5.29862 4.12247 4.13332 3.53207C2.96802 2.94166 1.9398 2.11296 1.11531 1.09968C0.696266 1.82216 0.568038 2.6771 0.756687 3.49073C0.945337 4.30436 1.43671 5.01563 2.13094 5.47999C1.60975 5.46344 1.09998 5.32312 0.64375 5.07061V5.11124C0.643283 5.86943 0.905399 6.60439 1.38554 7.19118C1.86568 7.77797 2.53422 8.18037 3.2775 8.32999C2.7947 8.46209 2.28799 8.48133 1.79656 8.38624C2.0063 9.03829 2.41438 9.60859 2.96385 10.0176C3.51331 10.4265 4.17675 10.6537 4.86156 10.6675C3.69895 11.5807 2.26278 12.0761 0.784375 12.0737C0.522191 12.0733 0.260266 12.0573 0 12.0256C1.5019 12.9892 3.24902 13.5009 5.03344 13.5Z"
                fill="#242628"
              />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/bujeti">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z"
                fill="#242628"
              />
            </svg>
          </Link>
        </div>
      </header>
      <main>
        <div className="payment-account-details">
          <span className="back-arrow" onClick={goBack}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 6H1"
                stroke="#242628"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 11L1 6L6 1"
                stroke="#242628"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </span>
          {error.error && <div className="error-wrapper">{error.message}</div>}
          <h1>Transfer funds to</h1>
          <ListItem title="Bank name" subTitle={accountDetails?.bankName} />
          <ListItem title="Account name" subTitle={accountDetails?.accountName} />
          <ListItem
            title="Amount"
            subTitle={
              <CurrencyFormat
                prefix={getCurrency(accountDetails?.currency)}
                value={total?.amount / 100}
                thousandSeparator={true}
                displayType="text"
              />
            }
            hasCopy={false}
          />
          <ListItem
            title="Account number"
            subTitle={accountDetails?.accountNumber}
            hasCopy={true}
          />
          {!error.error && (
            <section>
              <CustomButton fullWidth={true} onClick={onPaymentClick}>
                I&#39;ve sent the money
              </CustomButton>
            </section>
          )}
        </div>
      </main>
    </section>
  )
}

const ListItem = ({ title, subTitle, hasCopy }) => {
  const copyToClipboard = async (account) => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(account)
      toast.success('Account number copied')
    }
  }

  return (
    <section className="list-items flex items-center justify-between">
      <div className="">
        <h6>{title}</h6>
        <p>{subTitle}</p>
      </div>
      {hasCopy && (
        <span className="copy" onClick={() => copyToClipboard(subTitle)}>
          Copy{' '}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7992 5.19995H6.39922C5.73648 5.19995 5.19922 5.73721 5.19922 6.39995V11.8C5.19922 12.4627 5.73648 13 6.39922 13H11.7992C12.462 13 12.9992 12.4627 12.9992 11.8V6.39995C12.9992 5.73721 12.462 5.19995 11.7992 5.19995Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.8 8.8H2.2C1.88174 8.8 1.57652 8.67357 1.35147 8.44853C1.12643 8.22348 1 7.91826 1 7.6V2.2C1 1.88174 1.12643 1.57652 1.35147 1.35147C1.57652 1.12643 1.88174 1 2.2 1H7.6C7.91826 1 8.22348 1.12643 8.44853 1.35147C8.67357 1.57652 8.8 1.88174 8.8 2.2V2.8"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </section>
  )
}

const InvoicePresentationWrapper = ({ children, style }) => {
  return (
    <section className="flex items-center justify-between" style={style}>
      {children}
    </section>
  )
}

const Footer = () => {
  return (
    <>
      <section className="details flex items-center justify-center text-center">
        <p>Powered by</p>
        <a href="https://www.bujeti.com">
          {' '}
          <svg
            width="30"
            height="25"
            viewBox="0 0 60 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.0028 19.3026V17.6525C22.8699 18.8965 21.4201 19.515 19.6767 19.515C18.2086 19.515 16.989 19.0954 16.1383 18.2212C15.289 17.3484 14.8585 16.0753 14.8585 14.4718V5.33838H18.5816V14.2858C18.5816 15.1228 18.7824 15.6869 19.1171 16.0416C19.4479 16.3923 19.9676 16.5994 20.7421 16.5994C21.9711 16.5994 22.9889 16.0011 23.7815 14.6895V5.33838H27.5047V19.3026H24.0028ZM32.6476 5.33838V19.2524C32.6476 20.9212 32.2179 22.2705 31.3067 23.2483C30.3973 24.2243 29.0556 24.7792 27.335 24.9577L26.9268 25V22.1587L27.2299 22.1032C27.7975 21.9993 28.1972 21.7426 28.4642 21.3447C28.7386 20.9356 28.8978 20.3393 28.8978 19.518V5.33838H32.6476ZM32.2515 0.48673L32.2549 0.489656C32.6705 0.852268 32.86 1.39345 32.864 1.90312C32.8679 2.41139 32.6874 2.95045 32.2807 3.30314L32.2777 3.30568L32.2747 3.30816C31.869 3.64533 31.2958 3.79205 30.7627 3.79205C30.2308 3.79205 29.6599 3.64577 29.2647 3.30314C28.858 2.95045 28.6775 2.41139 28.6814 1.90312C28.6854 1.39345 28.8749 0.852268 29.2905 0.489656L29.2909 0.489281L29.2914 0.488908C29.6843 0.148226 30.2401 0 30.7627 0C31.2863 0 31.8446 0.148588 32.2481 0.483885L32.2515 0.48673ZM42.7055 14.6872H46.4828L46.3522 15.155C45.5808 17.9181 43.2283 19.515 40.0027 19.515C38.1537 19.515 36.5942 18.8968 35.3492 17.6836C34.0823 16.4491 33.4799 14.6385 33.4799 12.3205C33.4799 10.0039 34.0816 8.16603 35.3492 6.93075C36.5971 5.71473 38.158 5.12591 40.0027 5.12591C41.843 5.12591 43.3998 5.6851 44.6734 6.84221C45.9687 8.01891 46.5788 9.67034 46.5788 11.7893V13.1409H37.3095V13.4094C37.3095 14.683 37.6164 15.5713 38.0864 16.1349C38.5494 16.69 39.2047 16.9713 40.0027 16.9713C40.7269 16.9713 41.2808 16.7947 41.6978 16.4738C42.1156 16.1523 42.4323 15.6578 42.6298 14.9564L42.7055 14.6872ZM55.2005 7.88215H51.658V15.1357C51.658 15.8268 51.7982 16.2726 52.0154 16.5407C52.2201 16.7936 52.5395 16.9447 53.046 16.9447C53.4836 16.9447 54.1433 16.8461 55.0202 16.6606L55.4669 16.5661V18.9845L55.2172 19.0701C54.322 19.3769 53.4019 19.515 52.4334 19.515C50.9881 19.515 49.84 19.1934 49.0587 18.4143C48.2776 17.6355 47.9349 16.4709 47.9349 14.9498V7.88215H46.097V5.33838H47.9349V2.92517L51.658 1.96393V5.33838H55.2005V7.88215ZM59.7336 5.33838V19.3026H55.9839V5.33838H59.7336ZM59.3909 0.48673L59.3942 0.489656C59.8099 0.852291 60 1.39412 60 1.90598C60 2.41726 59.8099 2.95715 59.3874 3.30816C58.9815 3.64548 58.4082 3.79205 57.8721 3.79205C57.3372 3.79205 56.7653 3.64617 56.3596 3.31051C55.9238 2.96121 55.7242 2.42135 55.7242 1.90598C55.7242 1.38905 55.9246 0.845858 56.3556 0.484813L56.3562 0.484348L56.3567 0.483885C56.7627 0.14657 57.336 0 57.8721 0C58.4082 0 58.9815 0.14657 59.3874 0.483885L59.3909 0.48673ZM38.0326 8.391C37.5823 8.91391 37.3138 9.68865 37.3096 10.6768H42.6959C42.6918 9.64647 42.4219 8.87411 41.9748 8.36339C41.53 7.8554 40.8729 7.56344 40.0027 7.56344C39.1393 7.56344 38.4807 7.87068 38.0326 8.391ZM0 19.6714H7.81931C9.84063 19.6714 11.3566 19.1931 12.3939 18.2365C13.4045 17.3065 13.9099 16.1374 13.9099 14.7556C13.9099 12.6564 12.5303 11.0488 10.4824 10.5971C12.3939 10.0467 13.4311 8.2986 13.4311 6.38541C13.4311 5.03023 12.9258 3.86106 11.9151 2.93104C10.9045 2.00102 9.3885 1.52272 7.36718 1.52272H0V5.87546H4.14337V3.3671L10.8023 6.98209L4.14337 10.5971V8.08872H0V13.1054H4.14337V10.5971L10.8023 14.2121L4.14337 17.8271V15.3187H0V19.6714Z"
              fill="black"
            />
          </svg>
        </a>
      </section>
    </>
  )
}

const PreviewTable = ({ data }) => {
  return (
    <section className="preview-table">
      <Table>
        <thead>
          <tr>
            <th>Product </th>
            <th>Description</th>
            <th>Qty.</th>
            <th style={{ textAlign: 'right' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {data?.invoiceProducts?.map((datum, index) => {
            return (
              <tr key={index}>
                <td>{datum?.product?.name}</td>
                <td>{data.description}</td>
                <td>{datum?.quantity}</td>
                <td style={{ textAlign: 'right' }}>
                  <CurrencyFormat
                    prefix={getCurrency(data?.currency)}
                    value={datum?.product.price / 100}
                    displayType="text"
                    thousandSeparator={true}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </section>
  )
}

const AmountInformation = ({ data }) => {
  const subTotal = data?.invoiceProducts?.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount
  }, 0)

  const vat = Math.ceil((parseInt(data?.vat) / 100) * subTotal)

  const discount =
    data?.discount_type === 'percentage' ? (data?.discount / 100) * subTotal : data?.discount

  return (
    <section className="bg-secondary-50 account-info">
      <div className="info flex items-center justify-between">
        <h1>Subtotal</h1>
        <p>
          <CurrencyFormat
            prefix={getCurrency(data?.currency)}
            value={subTotal / 100}
            displayType="text"
            thousandSeparator={true}
          />
        </p>
      </div>
      <div className="info flex items-center justify-between">
        <h1>Tax</h1>
        <p>
          {' '}
          <CurrencyFormat
            prefix={getCurrency(data?.currency)}
            value={vat / 100}
            displayType="text"
            thousandSeparator={true}
          />
        </p>
      </div>
      <div className="info flex items-center justify-between">
        <h1>Discount (Less)</h1>
        <p>
          {' '}
          <CurrencyFormat
            prefix={getCurrency(data?.currency)}
            value={discount / 100}
            displayType="text"
            thousandSeparator={true}
          />
        </p>
      </div>
      <div className="total flex items-center justify-between">
        <h1>Total</h1>
        <p>
          {' '}
          <CurrencyFormat
            prefix={getCurrency(data?.currency)}
            value={data?.amount / 100}
            displayType="text"
            thousandSeparator={true}
          />
        </p>
      </div>
    </section>
  )
}
