console.log("script.js is connected");

var teaList = [ // array
    { // object
        name: "Black Tea",
        homepageImage: "https://www.alveus.eu/wp-content/uploads/020-a.jpg",
        details: {
            title: "红茶",
            text:"红茶是一种完全氧化的茶，因其浓郁的口味和深色而闻名。它是全球最受欢迎的茶之一，常常以原味饮用，或添加牛奶、糖或柠檬等配料。红茶具有浓烈而大胆的风味，口感可从麦芽味到甜味不等，具体取决于品种。常见的风味包括巧克力、焦糖和水果，受种植地区和生产方法的影响。",
            image1: "https://www.alveus.eu/wp-content/uploads/020-a.jpg",
            image2:"https://img.zcool.cn/community/01d82b5c6687dca801203d225686f0.jpg@3000w_1l_0o_100sh.jpg",
            image3:"https://img.zcool.cn/community/0151b25c6687f0a801203d22554227.jpg@1280w_1l_2o_100sh.jpg",
            minutes: 15
        }
    },
    {
        name:"Green Tea",
        homepageImage:"https://img.zcool.cn/community/01c7cf5a994673a801219586342494.jpg@2o.jpg",
        details:{
            title:"绿茶",
            text:"绿茶是加工最少的茶类之一，因其清新的口感和众多健康益处而闻名。与红茶不同，绿茶叶经过最少的氧化处理，保留了更多的天然营养和抗氧化剂。绿茶的口感清淡，带有青草味或蔬菜味，通常伴有微甜或坚果的余韵。其风味因产地和加工方法的不同而有所变化。日本绿茶通常有更鲜美、带有“鲜味”的口感，而中国绿茶则偏向于较甜的风味。",
            image1: "https://img.zcool.cn/community/01b2f35e675d65a8012165183ebbf3.jpg@1280w_1l_2o_100sh.jpg",
            image2:"https://img.zcool.cn/community/01d23f5e1987dea801216518f53ef5.jpg@1280w_1l_2o_100sh.jpg",
            image3:"https://img.zcool.cn/community/01c7cf5a994673a801219586342494.jpg@2o.jpg",
            minutes: 17
        }
    },
    {
        name:"白茶",
        homepageImage:"https://img.zcool.cn/community/012fa85a223660a801216e8de349f8.jpg@1280w_1l_2o_100sh.jpg",
        details:{
            title:"白茶",
            text:"白茶是一种轻微发酵的茶，因其制作工艺最为简单、自然而闻名。白茶以其清淡、鲜爽的口感著称，具有微妙的甜味和花香。白茶通常未经揉捻，茶叶呈现出天然的形状和颜色。白茶的口感轻柔、清新，带有淡淡的花香和甜味。相比其他茶类，白茶的风味更为细腻温和，茶汤清澈透明，颜色呈浅黄色或淡绿色。",
            image1: "https://img.zcool.cn/community/0168c95e410241a80120a8955604d6.jpg@1280w_1l_2o_100sh.jpg",
            image2:"https://img.zcool.cn/community/0181c35e410241a801216518fa707a.jpg@1280w_1l_2o_100sh.jpg",
            image3:"https://img.zcool.cn/community/012fa85a223660a801216e8de349f8.jpg@1280w_1l_2o_100sh.jpg",
            minutes: 20
        }
    },
    {
        name:"乌龙茶",
        homepageImage:"https://img.zcool.cn/community/0126f157a071630000012e7ec9b628.jpg@1280w_1l_2o_100sh.jpg",
        details:{
            title:"乌龙茶",
            text:"乌龙茶,亦称青茶，品种较多，是中国几大茶类中，独具鲜明中国特色的茶叶品类。乌龙茶是经过采摘、萎凋、摇青、炒青、揉捻、烘焙等工序后制出的品质优异的茶类。乌龙茶由宋代贡茶龙团、凤饼演变而来，创制于1725年（清雍正年间）前后。品尝后齿颊留香，回味甘鲜。我国主要的青茶有：安溪铁观音、凤凰水仙、东方美人、武夷岩茶、罗汉沉香，乌龙红茶、红乌龙等等。",
            image1: "https://img.zcool.cn/community/013f7e5e0b00d2a80120a8959eca80.jpg@3000w_1l_0o_100sh.jpg",
            image2:"https://img.zcool.cn/community/0126f157a071630000012e7ec9b628.jpg@1280w_1l_2o_100sh.jpg",
            image3:"https://imgjia.huabaike.com/tukuimgs/32/20201022131746_612600.jpg",
            minutes: 8
        }
    }
]

window.onload = () => {
    
    console.log('page loaded...')
    // write code here
    teaList.forEach((item, index)=>{
        var parentNode =document.querySelector(".list-group-mobile");
        var newElement = `
        <a href="#" onclick="openTea(${index})" class="list-group-item list-group-item-action active" aria-current="true" style="background: url('${item.homepageImage}');"> 
            <p class="mb-1">${item.name}</p>                      
        </a>
        `
        parentNode.insertAdjacentHTML("beforeend",newElement)
    })
}


function showHeader(show){
    var header = document.querySelector(".mobile-header");
    if(show == true){
        header.style.display ="block" 
    }else{
        header.style.display = "none"
    }
}

function openTea(id){
    // console.log(teaList[id])
    showHeader(false);
    var tea = teaList[id]
    var tabTrigger = new bootstrap.Tab(document.querySelector("#profile-tab2"));
    tabTrigger.show();

    document.getElementById("detail-image1").src = tea.details.image1
    document.getElementById("detail-image2").src = tea.details.image2
    document.getElementById("detail-image3").src = tea.details.image3
    document.getElementById("detail-title").textContent = tea.details.title
    document.getElementById("detail-text").textContent = tea.details.text
    document.getElementById("tea-clock-button").onclick = function(){
      let teaMinutes = tea.details.minutes
      navigateToClock(teaMinutes)

    }
}



document.querySelector('.contact-item span').addEventListener('click', function() {
    const text = this.textContent;
    navigator.clipboard.writeText(text).then(function() {
        alert('联系方式已复制到剪贴板！');
    }, function() {
        alert('复制失败，请手动复制。');
    });                                                                                                                         
});


// TIME CLOCK CODE
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var startBtn = document.getElementById("startBtn")
var resetBtn = document.getElementById("resetBtn")

let workTime = 25 * 60;  // 25 minutes in seconds
let breakTime = 5 * 60;  // 5 minutes in seconds
let timeLeft = workTime;
let isWorking = true;
let timerInterval;


function updateTimer() {
    let minutesCalc = Math.floor(timeLeft / 60);
    let secondsCalc = timeLeft % 60;

    minutes.textContent = minutesCalc < 10 ? "0" + minutesCalc : minutesCalc;
    seconds.textContent = secondsCalc < 10 ? "0" + secondsCalc : secondsCalc;
}

function startTimer() {
    timerInterval = setInterval(() => {
        console.log("startTimer")
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            isWorking = !isWorking;
            timeLeft = isWorking ? workTime : breakTime;
            startTimer();
        }

        updateTimer();
    }, 1000);
}

startBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    startTimer();
    console.log("startBtn")
});

resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timeLeft = workTime;
    isWorking = true;
    updateTimer();
});

updateTimer();

function navigateToClock(teaMinutes){
   var clockElementButton = document.querySelector(".clock-button")
   console.log(minutes)
   // put your code here
    if(teaMinutes == workTime){
        return 
    }else{
        isWorking = false;
        clearInterval(timerInterval);
        workTime = teaMinutes * 60 
        timeLeft = teaMinutes * 60 
        updateTimer()
    }

   //
   clockElementButton.addEventListener('click',function(){
    var tabTrigger = new bootstrap.Tab(document.querySelector("#clock-tab2"));
      tabTrigger.show()
        
   })

}
