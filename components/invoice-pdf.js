import React from 'react'
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer/lib/react-pdf.browser.es.js'

import LogoIcon from '../public/images/Vector.png'
import FullLogo from '../public/images/Union.png'

import dayjs from 'dayjs'

// Register font
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
})

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '100%',
    padding: '10px 10px 60px',
  },
  header: {
    width: '100%',
    backgroundColor: '#fbf5ec',
    borderRadius: 12,
    padding: '20px 20px 10px 20px',
  },
  totalContainer: {
    backgroundColor: '#fbf5ec',
    borderRadius: 12,
    padding: '0px 16px 22px 16px',
    width: '356px',
    marginTop: 100,
    marginBottom: 80,
  },
  invoiceTitle: {
    fontWeight: 400,
    color: '#586068',
    fontSize: 12,
  },
  invoiceSubTitle: {
    fontWeight: 600,
    fontSize: 12,
    color: '#242628',
  },
  dFlex: {
    display: 'flex',
  },
  topSectionContainer: {
    padding: '20px 50px 69px 50px',
  },
  flexCol: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },

  noMargin: {
    marginBottom: 0,
  },
  title: {
    color: '#000',
    fontSize: 12,
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
  },
  rightAlign: {
    float: 'right',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  mt4: {
    paddingTop: 20,
  },
  px2: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  lightText: {
    color: '#586068',
    fontSize: 12,
    fontWeight: 200,
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: '#EAECF0',
    marginTop: 50,
    marginBottom: 34,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#121722',
    fontSize: 12,
    fontWeight: 400,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    textAlign: 'left',
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
    textAlign: 'left',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    textAlign: 'left',
    paddingBottom: 10,
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
    textAlign: 'left',
  },
})

const FormatAmount = (amount) => {
  return Number(amount).toLocaleString()
}

const InvoicePdf = ({ data }) => {
  return (
    <Document style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <Page style={styles.page}>
        <View style={[styles.header]}>
          <View style={[styles.dFlex, styles.flexRow, styles.spaceBetween]}>
            <image src="/images/Vector.png" style={{ width: 15, height: 20 }} atl="logo" />
            <View>
              <View style={{ marginBottom: 4, ...styles.rightAlign }}>
                <Text
                  style={{
                    color: '#d28b28',
                    fontWeight: 600,
                    fontSize: 12,
                    textAlign: 'right',
                    textTransform: 'capitalize',
                  }}
                >
                  {data?.status}
                </Text>
              </View>
              <InvoiceInfo title="Invoice No." value={data?.code} css={styles.rightAlign} />
            </View>
          </View>
          <FlexWrapper style={styles.mt4}>
            <InvoiceInfo title="Issue Date" value={dayjs(data?.createdAt).format('DD-MMMM-YYYY')} />
            <InvoiceInfo
              title="Due Date"
              value={dayjs(data?.due_date).format('DD-MMMM-YYYY')}
              css={styles.rightAlign}
            />
          </FlexWrapper>
          <FlexWrapper style={styles.mt4}>
            <View>
              <Text style={[styles.invoiceTitle]}>Bill From</Text>
              <Text style={[styles.invoiceSubTitle]}>{data?.company?.name}</Text>
              <Text style={[styles.lightText, styles.px2]}>{data?.company?.contactEmail}</Text>
              <Text style={[styles.lightText]}>{data?.company?.contact_phone}</Text>
            </View>
            <View>
              <Text style={[styles.invoiceTitle, styles.rightAlign]}>Bill To</Text>
              <Text
                style={[styles.invoiceSubTitle, styles.rightAlign]}
              >{`${data?.customer?.firstName} ${data?.customer?.lastName}`}</Text>
              <Text style={[styles.lightText, styles.px2, styles.rightAlign]}>
                {data?.customer?.email}
              </Text>
              <Text style={[styles.lightText, styles.rightAlign]}>
                {data?.customer?.phoneNumber?.localFormat}
              </Text>
            </View>
          </FlexWrapper>
        </View>
        <Main style={{ paddingLeft: 30, paddingRight: 30 }}>
          <View style={{ paddingTop: 44 }}>
            <Table data={data} />
          </View>
          <View style={styles.rightAlign}>
            <TotalContainer data={data} />
          </View>
          <View>
            <View style={styles.divider}></View>
            <View style={[styles.dFlex, styles.center]}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={styles.footerText}>Powered By</Text>
                <Image src={FullLogo} style={{ width: 32, height: 14, marginLeft: 2 }} alt="lgoo" />
              </View>
            </View>
          </View>
        </Main>
      </Page>
    </Document>
  )
}

const InvoiceInfo = ({ title, value, css }) => {
  return (
    <View>
      <Text style={[styles.invoiceTitle, css]}>{title}</Text>
      <Text style={[styles.invoiceSubTitle, css]}>{value}</Text>
    </View>
  )
}

const FlexWrapper = ({ children }) => {
  return (
    <View style={[styles.dFlex, styles.flexRow, styles.spaceBetween, styles.mt4]}>{children}</View>
  )
}

const Table = ({ data }) => {
  return (
    <View style={styles.table}>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Product</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Description</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Qty.</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Price</Text>
        </View>
      </View>
      {data?.invoiceProducts?.map((datum, index) => {
        return (
          <View style={styles.tableRow} key={index}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{datum?.product?.name}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{data?.description}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{datum.quantity}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                {`${data?.currency} ${FormatAmount(datum?.product?.price / 100)}`}
              </Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}

const TotalContainer = ({ data }) => {
  const subTotal = data?.invoiceProducts?.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount
  }, 0)

  const vat = Math.ceil((parseInt(data?.vat) / 100) * subTotal)

  const discount =
    data?.discount_type === 'percentage' ? (data?.discount / 100) * subTotal : data?.discount

  return (
    <View style={styles.totalContainer}>
      <FlexWrapper>
        <Text style={styles.invoiceTitle}>Subtotal</Text>
        <Text style={styles.invoiceTitle}>
          {`${data?.currency}${FormatAmount(subTotal / 100)}`}
        </Text>
      </FlexWrapper>
      <FlexWrapper>
        <Text style={styles.invoiceTitle}>Tax</Text>
        <Text style={styles.invoiceTitle}>{`${data?.currency} ${FormatAmount(vat / 100)}`}</Text>
      </FlexWrapper>
      <FlexWrapper>
        <Text style={styles.invoiceTitle}>Discount(less)</Text>
        <Text style={styles.invoiceTitle}>
          {`${data?.currency} ${FormatAmount(discount / 100)}`}
        </Text>
      </FlexWrapper>
      <FlexWrapper>
        <Text style={styles.invoiceSubTitle}>Total</Text>
        <Text style={styles.invoiceSubTitle}>
          {`${data?.currency} ${FormatAmount(data?.amount / 100)}`}
        </Text>
      </FlexWrapper>
    </View>
  )
}

const Main = ({ children }) => {
  return <View>{children}</View>
}
export const PDF = () => (
  <PDFViewer>
    <InvoicePdf />
  </PDFViewer>
)

export default InvoicePdf
