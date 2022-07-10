const protocol = "http";
const host = "45.80.152.23:4553/api";
const port = "";
const trailUrl = "";
// https://api.loginvm.com http://45.80.152.23:4553/api/
const hostUrl = `${protocol}://${host}${port ? ":" + port : ""}/`;
const endpoint = `${protocol}://${host}${port ? ":" + port : ""}${trailUrl}`;

export default {
  protocol: protocol,
  host: host,
  port: port,
  apiUrl: trailUrl,
  endpoint: endpoint,
  hostUrl: hostUrl,
};
