
        var tabPane = document.getElementById('tab-pane');
        var hamburger = document.getElementById('hamburger');

        var bar = document.getElementById('bar');
        var logo = document.getElementById('logoTabs');
        var empty = document.getElementById('empty');
        var tabs = ["home", "services", "info", "contact"];

        bar.addEventListener("click", switchMenu);

        function switchMenu(){
            if(tabPane.classList.contains('changeToIcons')) {
                tabPane.classList.remove('changeToIcons');
                logo.classList.remove('none');
                empty.classList.remove('emptyOnTop');
                for(var i=0; i<tabs.length; i++) {
                    var elementChange = document.getElementById(tabs[i]);
                    elementChange.classList.remove('putIconSize');
                }
            } else {
                tabPane.classList.add('changeToIcons');
                logo.classList.add('none');
                empty.classList.add('emptyOnTop');
                for(var i=0; i<tabs.length; i++) {
                    var elementChange = document.getElementById(tabs[i]);
                    elementChange.classList.add('putIconSize');
                }
            }
        }
 
        hamburger.addEventListener("click", openMenu);
        
        function openMenu() {
            tabPane.classList.toggle('bloke');
            hamburger.classList.toggle('toClose');
        }
                /* 
                1. Tabs have to be hidden and displayed only when you click on an icon
                2. Change width and height of all tabs div and put svg in there
                */
      
        
        tabPane.addEventListener("click", changeTab);


        var alertBox = document.getElementById('alert');
        
        function btnOpenTimes() {

            event.preventDefault();
        alertBox.classList.add('displayAlert');

        var currentActiveTab = document.getElementsByClassName('active');
        currentActiveTab[0].classList.add('opac20');
        }

        var closeAlertOK = document.getElementById('ok');
        closeAlertOK.addEventListener("click", closeAlert);

        function closeAlert() {
            alertBox.classList.remove('displayAlert');
            var withOpacity = document.getElementsByClassName('opac20');
            for(i=0;i<withOpacity.length; i++){
                withOpacity[i].classList.remove('opac20');
            }
        }

        
        function changeTab() {
            if(alertBox.classList.contains('displayAlert')) {
                closeAlert();
            }
            var window_width = window.innerWidth;
            var tab = event.target.id;
            if(tabs.indexOf(tab)>=0) {

            var currentActiveTab = document.getElementsByClassName('tabActive');
        var currentTab = document.getElementsByClassName('active');
          
            currentActiveTab[0].classList.remove('tabActive');
            currentTab[0].classList.remove('active');
          
            var windowTab = document.getElementById('content_'+tab);
            windowTab.classList.add('active');

            var switchedTab = event.target;
            switchedTab.classList.add('tabActive');

   
          if(window_width<650) {
              tabPane.classList.toggle('bloke');
              hamburger.classList.toggle('toClose');
          }

        }
            
        }

        var leftButton = document.getElementById('leftButton');

leftButton.addEventListener("click", rotateLeft);

var rightButton = document.getElementById('rightButton');

rightButton.addEventListener("click", rotateRight);

function rotateLeft() {
  var middle = document.getElementsByClassName('activeTable')[0];
  var left = document.getElementsByClassName('nonActiveLeft')[0];
  var right = document.getElementsByClassName('nonActiveRight')[0];

  middle.classList.remove('activeTable');
  middle.classList.add('nonActiveRight');

  left.classList.remove('nonActiveLeft');
  left.classList.add('activeTable');

  right.classList.remove('nonActiveRight');
  right.classList.add('nonActiveLeft');

}


function rotateRight() {
  var middle = document.getElementsByClassName('activeTable')[0];
  var left = document.getElementsByClassName('nonActiveLeft')[0];
  var right = document.getElementsByClassName('nonActiveRight')[0];

  middle.classList.remove('activeTable');
  middle.classList.add('nonActiveLeft');

  left.classList.remove('nonActiveLeft');
  left.classList.add('nonActiveRight');

  right.classList.remove('nonActiveRight');
  right.classList.add('activeTable');

}