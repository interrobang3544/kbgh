const express = require("express");
const axios = require("axios"); // HTTP 요청
const router = express.Router();

router.get("/sibling/:userNickname", (req, res) => {
  const { userNickname } = req.params;
  axios({
    url: `https://developer-lostark.game.onstove.com/characters/${userNickname}/siblings`,
    method: "GET",
    headers: {
      'accept': 'application/json',
      'authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDE0MzIifQ.k_TOsbttwfwKtq8qJOWv0QHQ0kn_QxBM69xON1QvTkx3ZcmPK0aNGhGc35aUua551AlrRj26oVrPSZzyUH0g_Vlw4rt_YjTmrsBB1ma3CpKpFYOy35m_RFaulo6X2qcwnsHStyRviyf3BpzeaaRvFv94VGsxqQKISNBS7EMQARQ320dYq50Cq0Au43f_x40vG-mrnYaUFiLhYsOYFgFvyOkeGCTC_KzEtkt_9WFNrosyl5VI1AFxc4AOJuwDi-p0oN8XkV4ALQA9zX3oKS8ivFQoVCjbJlHUpOVlwBq3iFJQ9h3cwL-pBRe1w662T59GA-EFxKjaFQHDhHI63MS4kw'
    }
  })
    .then((response) => {
      const { data } = response
      if (data === null) {
        res.status(400).json({ message: "해당 닉네임의 캐릭터가 없습니다."});
      } else {
        res.json({
          data
        })
      }
    })
    .catch((error) => {
      res.status(400).json({ message: "에러 발생" , error});
    });
});

router.get("/armories/:userNickname", (req, res) => {
  const { userNickname } = req.params;
  axios({
    url: `https://developer-lostark.game.onstove.com/armories/characters/${userNickname}/profiles`,
    method: "GET",
    headers: {
      'accept': 'application/json',
      'authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDE0MzIifQ.k_TOsbttwfwKtq8qJOWv0QHQ0kn_QxBM69xON1QvTkx3ZcmPK0aNGhGc35aUua551AlrRj26oVrPSZzyUH0g_Vlw4rt_YjTmrsBB1ma3CpKpFYOy35m_RFaulo6X2qcwnsHStyRviyf3BpzeaaRvFv94VGsxqQKISNBS7EMQARQ320dYq50Cq0Au43f_x40vG-mrnYaUFiLhYsOYFgFvyOkeGCTC_KzEtkt_9WFNrosyl5VI1AFxc4AOJuwDi-p0oN8XkV4ALQA9zX3oKS8ivFQoVCjbJlHUpOVlwBq3iFJQ9h3cwL-pBRe1w662T59GA-EFxKjaFQHDhHI63MS4kw'
    }
  })
    .then((response) => {
      const { data } = response
      if (data === null) {
        res.status(400).json({ message: "해당 닉네임의 캐릭터가 없습니다."});
      } else {
        res.json({
          data
        })
      }
    })
    .catch((error) => {
      res.status(400).json({ message: "에러 발생" , error});
    });
});



module.exports = router;