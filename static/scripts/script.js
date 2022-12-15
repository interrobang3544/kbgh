document.addEventListener("DOMContentLoaded", () => {
  showSibling('메이크미새드');
  showArmories('메이크미새드');
  showArmories('메이크미해피');
  showArmories('기상연우');
});

function showSibling(userNickname) {
  axios.get(`api/sibling/${userNickname}`)
  .then((response) => {
    console.log(response.data.data)
  })
}

function showArmories(userNickname) {
  axios.get(`api/armories/${userNickname}`)
  .then((response) => {
    console.log(response.data.data)
    const { CharacterClassName,
      CharacterImage,
      CharacterName,
      ExpeditionLevel,
      ItemAvgLevel,
      ServerName,
      Stats,
      Tendencies   
    } = response.data.data

    const temp = document.createElement("div");
    temp.setAttribute("class", "lostark")
    temp.innerHTML = `
    <div class="main-box-title">Lost Ark</div>
    <div class="main-box-content">
    <div class="lostark_character_info">
    <div class="info_box"><div class="info_title">닉네임</div><span class="info_content">${CharacterName}</span></div>
    <div class="info_box"><div class="info_title">클래스</div><span class="info_content">${CharacterClassName}</span></div>
    <div class="info_box"><div class="info_title">원정대 레벨</div><span class="info_content">${ExpeditionLevel}</span></div>
    <div class="info_box"><div class="info_title">아이템 레벨</div><span class="info_content">${ItemAvgLevel}</span></div>
    <div class="info_box"><div class="info_title">서버</div><span class="info_content">${ServerName}</span></div>
    <div class="image_box"><img class="character_image" src="${CharacterImage}"></div>
    </div>
    <div class="lostark_character_stat">
    <div class="stat_title">기본 특성</div>
    <div class="stat_box"><div class="stat_name">최대 생명력</div><span class="stat_content">${Stats[6].Value}</span></div>
    <div class="stat_box"><div class="stat_name">공격력</div><span class="stat_content">${Stats[7].Value}</span></div>
    <div class="stat_title">전투 특성</div>
    <div class="stat_box"><div class="stat_name">치명</div><span class="stat_content">${Stats[0].Value}</span></div>
    <div class="stat_box"><div class="stat_name">특화</div><span class="stat_content">${Stats[1].Value}</span></div>
    <div class="stat_box"><div class="stat_name">제압</div><span class="stat_content">${Stats[2].Value}</span></div>
    <div class="stat_box"><div class="stat_name">신속</div><span class="stat_content">${Stats[3].Value}</span></div>
    <div class="stat_box"><div class="stat_name">인내</div><span class="stat_content">${Stats[4].Value}</span></div>
    <div class="stat_box"><div class="stat_name">숙련</div><span class="stat_content">${Stats[5].Value}</span></div>
    <div class="stat_title">성향</div>
    <div class="stat_box"><div class="stat_name">지성</div><span class="stat_content">${Tendencies[0].Point}</span></div>
    <div class="stat_box"><div class="stat_name">담력</div><span class="stat_content">${Tendencies[1].Point}</span></div>
    <div class="stat_box"><div class="stat_name">매력</div><span class="stat_content">${Tendencies[2].Point}</span></div>
    <div class="stat_box"><div class="stat_name">친절</div><span class="stat_content">${Tendencies[3].Point}</span></div>
    </div>
    </div>
    </div>
    `
    document.getElementById('lostark').append(temp)
  })
}