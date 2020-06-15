import axios from "axios";
import { call, select, race } from "redux-saga/effects";
import { selectors } from "../../stores";

const URL = "https://932ptmzg3l.execute-api.ap-southeast-1.amazonaws.com/Prod/";

const authKey =
  "eyJraWQiOiJhK0VjTG4yRVFDTVNrZDhtRUxzcHVCcW1pUklvR1l4ZTQzOUV3NlUwbWZnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0YzM4OTliNy1lYzQzLTRhZDgtODcwYS1mYjNiYjU3ODE1NmIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0xX01FN1VyeDFlMyIsInBob25lX251bWJlcl92ZXJpZmllZCI6dHJ1ZSwiY29nbml0bzp1c2VybmFtZSI6Imdhbmd5aTg5QGdtYWlsLmNvbSIsImF1ZCI6Ijc3c3VmcWdwcmVvNXFudnRia2xhb3Z0cnFtIiwiZXZlbnRfaWQiOiI2ODU3MmYyZi00M2YzLTRiZDQtOTRkMi1hZTA0ZmNkNTU2Y2IiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU5MjI0Nzc4MCwicGhvbmVfbnVtYmVyIjoiKzY1OTIyMDkyMDAiLCJleHAiOjE1OTIyNTEzODAsImlhdCI6MTU5MjI0Nzc4MCwiZW1haWwiOiJnYW5neWk4OUBnbWFpbC5jb20ifQ.SnSuSFW4x4S8iDhUFFx0T5oGMcaBH2mUZQfeM3X7bVi93szjP-Nf2f3v-sgEBbri8Yw5Pv6aQ_oGM2MLoVITy_QtWud1AZ8UY3AZ7XqQQQzAg4q18tslQsoG0M30_jrh8PfSKgF74J0N96lSWvuo-0KewfRL_2VaGDWZz7chWh1m-DvSLu2ShlKABgnbfnOrI-7ytCx23XEzy83NFCbJ9F5pUDq6mbDMcHZigKGR3s_HFzGj8jMjq8yQ9IjgpKZ81BP0UaGNMdDaCjQgwrmTEeTTPNwOGmRP9PN9mq1gZMRp-qlN-TRrKDuPSCwENYKd3zO8B6PHbQSWtP82_AC-yg";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${authKey}`,
};
function createProjectApi(body) {
  console.log(headers);
  return axios.post(URL + "projects", body, { headers: headers });
}

export { createProjectApi };
