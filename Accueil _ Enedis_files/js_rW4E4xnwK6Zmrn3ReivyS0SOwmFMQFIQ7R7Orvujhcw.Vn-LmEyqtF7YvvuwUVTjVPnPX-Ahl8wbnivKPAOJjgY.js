(function (Drupal, drupalSettings) {
    Drupal.behaviors.profilId = {
        attach: function (context, settings) {
            const profilId = drupalSettings.profilId
            const profilCookie = drupalSettings.profilCookie

            //global profil
            const listProfil = document.querySelectorAll('.over--menu-nav__button')
            if(profilId == null){
                document.cookie = `profilID=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'`
                listProfil.forEach(elem => {
                    elem.classList.remove('is-active')
                });
            }

            if(findCookie('profilID') === undefined){

                if (profilCookie === 'cookie'){
                    document.cookie = `profilID=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'`
                    listProfil.forEach(elem => {
                        elem.classList.remove('is-active')
                    });
                }
                else if(profilId == null){
                    document.cookie = `profilID=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'`
                    listProfil.forEach(elem => {
                        elem.classList.remove('is-active')
                    });
                }
                else{
                    document.cookie = `profilID=${profilId}`
                }
            }
            else{
                //click for menu
                listProfil.forEach((link,index) => {
                    link.addEventListener('click', ()=>{
                        document.cookie = `profilID=${index}`
                    })
                });
                //click for search node
                const listProfilSearch = document.querySelectorAll('.wrapper-profils > ul > li')
                listProfilSearch.forEach((link,index) => {
                    link.addEventListener('click', ()=>{
                        document.cookie = `profilID=${index}`
                    })
                });

                if(profilId != null){
                    document.cookie = `profilID=${(profilCookie == 'cookie'? findCookie('profilID'): profilId)}`
                }
            }
            listProfil.forEach((elem,index) => {
                if(index == findCookie('profilID')){
                    elem.classList.add('is-active')
                }
            });
            if(window.location.origin + "/" == window.location.href || window.location.origin + "/index" == window.location.href){
                listProfil.forEach((elem,index) => {
                    if(index == findCookie('profilID')){
                        elem.classList.remove('is-active')
                    }
                });
                document.cookie = `profilID=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'`
            }
        }
    }
})(Drupal, drupalSettings);

function findCookie(name){
    const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
    return cookieValue
}