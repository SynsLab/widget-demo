(function($,Drupal,drupalSettings){Drupal.behaviors.footerDataLayer={attach:function(context,settings){var env=drupalSettings.footerDataLayer.datalayer_get_base.ENV_WORK,lvl=drupalSettings.footerDataLayer.datalayer_get_base.niveau_2,valGoogle=this.sanitized($('.GooglePlay').text()),valApp=this.sanitized($('.AppStore').text()),valMediateur=this.sanitized($('.Mediateur').text());$('.GooglePlay').attr('onclick',"javascript:return tC.event.click_atinternet(this,{'ENV_WORK':'"+env+"','niveau_2':'"+lvl+"', 'chapitre_1':'footer','chapitre_2':'application','page':'"+valGoogle+"','type':'exit'");$('.AppStore').attr('onclick',"javascript:return tC.event.click_atinternet(this,{'ENV_WORK':'"+env+"','niveau_2':'"+lvl+"', 'chapitre_1':'footer','chapitre_2':'application','page':'"+valApp+"','type':'exit'");$('.Mediateur').attr('onclick',"javascript:return tC.event.click_atinternet(this,{'ENV_WORK':'"+env+"','niveau_2':'"+lvl+"', 'chapitre_1':'footer','chapitre_2':'transverse','page':'"+valMediateur+"','type':'exit'")},sanitized:function(string){var newString=string.toLowerCase();newString=newString.replace(/\s+/g,'_');newString=newString.normalize('NFD').replace(/[\u0300-\u036f]/g,'');newString=newString.replace("'",'_');return newString}}})(jQuery,Drupal,drupalSettings)