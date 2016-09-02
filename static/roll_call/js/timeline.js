$(function() {
  var showMoreBtn = '<div class="waves-effect waves-light btn white black-text showBtn showMoreBtn"><i class="fa fa-search"></i>More</div>';
  var showLessBtn = '<div class="waves-effect waves-light btn white black-text showBtn showLessBtn"><i class="fa fa-paw"></i></div>';
  var showMoreBtnAuto = '<div class="showMoreBtnAuto"></div>'
  $('#timeline-container-basic').timelineMe({
  items: [
    {
      type: 'milestone',
      label: '<b>2016</b>',
    },
    {
      type: 'bigItem',
      label: '<h4><span class="grey lighten-3">9月</span></h4>',
      shortContent: ' \
      <div class="col s12 center"> \
        <img class="school" src="/static/roll_call/img/muscular-man-flexing-silhouette.svg" alt="" /> \
        <h6>歡迎來到溫暖的宿舍</h6> \
        <h6>以下是今年度的活動</h6> \
      </div>',
      fullContent: '\
      <div class="col s12 center"> \
        <img class="school" src="/static/roll_call/img/muscular-man-flexing-silhouette.svg" alt="" /> \
        <h6>歡迎來到溫暖的宿舍</h6> \
        <h6>以下是今年度的活動</h6> \
      </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
    },
    {
      type: 'smallItem',
      label: '<h4>10月<h4>',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="/static/roll_call/img/torii-gate.svg" alt="" /> \
          <h5>日本自住遊行講座</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="/static/roll_call/img/torii-gate.svg" alt="" /> \
          <h5>日本自住遊行講座</h5> \
          <p>會有專人與您介紹該行程的注意事項以及費用</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
    },
    {
      type: 'milestone',
      label: '<b>2015</b>',
    },
    {
      type: 'smallItem',
      label: '<h4>11月<h4>',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="/static/roll_call/img/paint-palette.svg" alt="" /> \
          <h5>插畫人生講座</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="/static/roll_call/img/paint-palette.svg" alt="" /> \
          <h5>插畫人生講座</h5> \
          <p>專業的講師特地到男宿開課</p> \
          <p>感覺全身的藝術細胞都沸騰了嗎?</p> \
          <p>快來報名吧~</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '<h4>9~11月<h4>',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="/static/roll_call/img/cinema.svg" alt="" /> \
          <h5>電影欣賞講座</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="/static/roll_call/img/cinema.svg" alt="" /> \
          <h5>電影欣賞講座</h5> \
          <p>我們會精心挑選近期的熱門電影</p> \
          <p>並且準備點心及飲料供大家享用</p> \
          <p>快點左右鄰居揪一揪  一起來看電影拉~</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
    },
    {
      type: 'milestone',
      label: '<b>2015</b>',
    },
    {
      type: 'smallItem',
      label: '<h4>12月<h4>',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="/static/roll_call/img/cupcake.svg" alt="" /> \
          <h5>手工甜點與幸福的對話</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="/static/roll_call/img/cupcake.svg" alt="" /> \
          <h5>手工甜點與幸福的對話</h5> \
          <p>聖誕節到了</p> \
          <p>想要送禮物給女生卻不知道要送什麼好嗎？</p> \
          <p>用親手做的甜點溶化美麗佳人的心吧~</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '<h4>12月<h4>',
      shortContent: '\
      <div class="col s12 center"> \
      <img class="timeline-photo" src="/static/roll_call/img/fireplace.svg" alt="" /> \
      <h5>冬季送暖</h5> \
      </div>',
      fullContent: '\
      <div class="col s12 center"> \
      <img class="timeline-photo" src="/static/roll_call/img/fireplace.svg" alt="" /> \
      <h5>冬季送暖</h5> \
      <p>宿舍的水泥床讓你冬天寂寞難耐嗎？</p> \
      <p>沒有女朋友讓你聖誕節還是一個人嗎？</p> \
      <p>別怕 今年聖誕節我們陪你過</p> \
      <p>期待當晚我們的敲門聲吧~</p> \
      </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
    },
    {
      type: 'smallItem',
      label: '<h4>3月<h4>',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="/static/roll_call/img/heart.svg" alt="" /> \
          <h5>健康人生</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="/static/roll_call/img/heart.svg" alt="" /> \
          <h5>健康人生</h5> \
          <p>媽媽不在身旁</p> \
          <p>就不會照顧自己了嗎？</p> \
          <p>讓我們教你幾招小撇步</p> \
          <p>把自己照顧的好好的不再讓父母擔心拉~</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
    },
    {
      type: 'smallItem',
      label: '<h4>4月<h4>',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="/static/roll_call/img/cooker.svg" alt="" /> \
          <h5>型男講座 - 型男大主廚</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="/static/roll_call/img/cooker.svg" alt="" /> \
          <h5>型男講座 - 型男大主廚</h5> \
          <p>每次情人節都送市面上的巧克力</p> \
          <p>感到厭煩了嗎？</p> \
          <p>用親手煮的菜</p> \
          <p>征服女人的味蕾吧~</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
    },
    {
      type: 'smallItem',
      label: '<h4>5月<h4>',
      shortContent: '\
      <div class="col s12 center"> \
      <img class="timeline-photo" src="/static/roll_call/img/muscle.svg" alt="" /> \
      <h5>型男講座 - 運動講座</h5> \
      </div>',
      fullContent: '\
      <div class="col s12 center"> \
      <img class="timeline-photo" src="/static/roll_call/img/muscle.svg" alt="" /> \
      <h5>型男講座 - 運動講座</h5> \
      <p>打球卡位總是被撞飛嗎？</p> \
      <p>閒自己太過單薄沒有安全感嗎？</p> \
      <p>教你幾招健身技巧</p> \
      <p>保證讓你脫胎換骨拉~</p> \
      </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
      forcePosition: 'right'
    },
    {
      type: 'bigItem',
      label: '<h4><span class="grey lighten-3">服委招募</span></h4>',
      shortContent: '\
      <div class="col s12 center"> \
      <img class="timeline-photo" src="/static/roll_call/img/muscular-man-flexing-silhouette.svg" alt="" /> \
      <h5>服委招募</h5> \
      </div>',
      fullContent: '\
      <div class="col s12 center"> \
      <img class="timeline-photo" src="/static/roll_call/img/muscular-man-flexing-silhouette.svg" alt="" /> \
      <h5>服委招募</h5> \
      <p>想要舉辦各種活動嗎？</p> \
      <p>有滿腔熱血無處揮灑嗎？</p> \
      <p>想要共同維護這個溫暖的家嗎？</p> \
      <p>快來加入我們吧~</p> \
      </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
    }
  ]
  });
});
