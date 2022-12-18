const express = require("express");
const axios = require("axios"); // HTTP 요청
const router = express.Router();

router.get("/lotto/:record", (req, res) => {
  const { record } = req.params
  axios({
    url: `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${record}`,
    method: "GET",
  })
    .then((response) => {
      const { data } = response
      res.json({
        data
      })
    })
    .catch((error) => {
      res.status(400).json({ message: "에러 발생" , error});
    });
});

module.exports = router;