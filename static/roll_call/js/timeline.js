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
      showMore: showMoreBtnAuto,
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
          <p>等等填</p> \
          <p></p> \
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
          <p>因為學生會的宗旨就是<span  class="deep-orange-text">服務學生</span></p> \
          <p>所以我開始有許多新的目標和發想</p> \
          <p>並開始著手寫code 架設一個又一個的服務</p> \
          <p>也在很多<span class="deep-orange-text">超強的大學長們</span>的教導下</p> \
          <p>少走了很多冤望路</p> \
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
          <p>第一次參加資訊屆的研討會</p> \
          <p>雖然有很多內容都無法理解</p> \
          <p>但那種大家聚在一起開發<span class="deep-orange-text">open source</span>程式</p> \
          <p>為大家服務的感覺讓我覺得寫程式真的是一件很酷的事</p> \
          <p>期望能為<span class="deep-orange-text">開源社群</span>做些什麼</p> \
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
          <p>QQ</p> \
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
      <p>QQ</p> \
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
          <p>QQ</p> \
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
          <p>QQ</p> \
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
      <p>QQ</p> \
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
      <p>QQ</p> \
      </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
    }
    // {
    //   type: 'bigItem',
    //   label: '<h4><span class="grey lighten-3">服委招募</span></h4>',
    //   shortContent: ' \
    //   <div class="col s12 center"> \
    //     <img class="legonow" src="/static/roll_call/img/muscular-man-flexing-silhouette.svg" alt="" /> \
    //   </div>',
    //   fullContent: '\
    //   <div class="col s12 center"> \
    //     <img class="legonow" src="/static/roll_call/img/muscular-man-flexing-silhouette.svg" alt="" /> \
    //     <h6>所以 現在的我呢?</h6> \
    //     <h5><span class="deep-orange-text">莫忘初衷</span>繼續前進吧！</h5> \
    //   </div>',
    //   showMore: showMoreBtnAuto,
    // },
  ]
  });
});
