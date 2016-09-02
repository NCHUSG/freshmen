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
      label: '<span class="grey lighten-3">September</span>',
      shortContent: ' \
      <div class="col s12 center"> \
        <img class="school" src="/static/roll_call/img/NCHU-Symbol.png" alt="" /> \
      </div>',
      fullContent: '\
      <div class="col s12 center"> \
        <img class="school" src="img/NCHU-Symbol.png" alt="" /> \
        <h6>就讀於中興大學 資工系</h6> \
      </div>',
      showMore: showMoreBtnAuto,
    },
    {
      type: 'smallItem',
      label: '加入資訊社',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="/static/roll_call/img/pikachu.svg" alt="" /> \
          <h5>資訊社</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="/static/roll_call/img/pikachu.svg" alt="" /> \
          <h5>資訊社</h5> \
          <p>資訊社對我意義重大</p> \
          <p>在許多學長的教導下我才能夠踏入資訊的領域</p> \
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
      label: '加入學生會資訊部',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/nchusg.jpg" alt="" /> \
          <h5>學生會資訊部</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/nchusg.jpg" alt="" /> \
          <h5>學生會資訊部</h5> \
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
      label: 'SITCON會眾',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/sitconLogo.png" alt="" /> \
          <h5>第一次參加資訊屆的研討會~</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/sitconLogo.png" alt="" /> \
          <h5>SITCON會眾</h5> \
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
      label: '選課小幫手誕生',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/Course/2.png" alt="" /> \
          <h5>選課小幫手誕生</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/Course/2.png" alt="" /> \
          <h5>選課小幫手誕生</h5> \
          <p>在兩位強大學長<a href="http://pastleo.me/" target="_blank">邱冠喻(PastLeo)</a>、<a href="http://taichunmin.idv.tw/" target="_blank">戴均民</a>的教學下</p> \
          <p>我和其他三名隊友合力完成起初看似不可能的任務</p> \
          <p>我也從一張白紙</p> \
          <p>變成會寫JQuery, Python的Crawler</p> \
          <p>隨著大二教到linux</p> \
          <p>我也把他從github轉移到學生會的<span  class="deep-orange-text">server</span></p> \
          <p>再寫一些自動更新課程資料的shell script</p> \
          <p>這段時間真是受不少貴人的幫忙才能完成阿</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: 'COSCUP會眾',
      shortContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/nchuit_coscup.jpg" alt="" /> \
          <h5>COSCUP會眾</h5> \
          <h5>再來見見世面~</h5> \
        </div>',
      fullContent: '\
        <div class="col s12 center"> \
          <img class="timeline-photo" src="img/nchuit_coscup.jpg" alt="" /> \
          <h5>COSCUP會眾</h5> \
          <p>在這裡遇到一些已經畢業的中興大學長</p> \
          <p>他們對選課小幫手給的建議讓我受益良多</p> \
          <p>也見證了台灣一年一度最大的的資訊盛會</p> \
        </div>',
      showMore: showMoreBtn,
      showLess: showLessBtn,
    },    
    {
      type: 'bigItem',
      label: '<span class="grey lighten-3">Now</span>',
      shortContent: ' \
      <div class="col s12 center"> \
        <img class="legonow" src="img/skate.jpg" alt="" /> \
      </div>',
      fullContent: '\
      <div class="col s12 center"> \
        <img class="legonow" src="img/skate.jpg" alt="" /> \
        <h6>所以 現在的我呢?</h6> \
        <h5><span class="deep-orange-text">莫忘初衷</span>繼續前進吧！</h5> \
      </div>',
      showMore: showMoreBtnAuto,
    },
  ]
  });
});
