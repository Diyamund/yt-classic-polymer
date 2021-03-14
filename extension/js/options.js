function save_options() {
  const settingsRestoreScroll = document.getElementById('options-scrollbar').checked;
  const settingsGuideMenu = document.getElementById('options-guide-menu').checked;
  const settingsDisableMP = document.getElementById('options-disable-mp').checked;
  const settingsDisableAnim = document.getElementById('options-disable-anim').checked;
  const settingsOldLogo = document.getElementById('options-old-logo').checked;
  const settingsListDisplay = document.getElementById('options-list-display').checked;
  const settingsOldNavBar = document.getElementById('options-navbar').checked;
  chrome.storage.sync.set({
    settingsRestoreScroll: settingsRestoreScroll,
    settingsGuideMenu: settingsGuideMenu,
    settingsDisableMP: settingsDisableMP,
    settingsDisableAnim: settingsDisableAnim,
    settingsOldLogo: settingsOldLogo,
    settingsListDisplay: settingsListDisplay,
    settingsOldNavBar: settingsOldNavBar
  });
}
function restore_options() {
  chrome.storage.sync.get({
    settingsRestoreScroll: true,
    settingsGuideMenu: true,
    settingsDisableMP: true,
    settingsDisableAnim: true,
    settingsOldLogo: false,
    settingsListDisplay: false,
    settingsOldNavBar: false
  }, function(items) {
    document.getElementById('options-scrollbar').checked = items.settingsRestoreScroll;
    document.getElementById('options-guide-menu').checked = items.settingsGuideMenu;
    document.getElementById('options-disable-mp').checked = items.settingsDisableMP;
    document.getElementById('options-disable-anim').checked = items.settingsDisableAnim;
    document.getElementById('options-old-logo').checked = items.settingsOldLogo;
    document.getElementById('options-list-display').checked = items.settingsListDisplay;
    document.getElementById('options-navbar').checked = items.settingsOldNavBar;
  });
}
document.addEventListener('DOMContentLoaded', function () {
  restore_options();
  document.getElementById("options-scrollbar").addEventListener('click', save_options);
  document.getElementById("options-guide-menu").addEventListener('click', save_options);
  document.getElementById("options-disable-mp").addEventListener('click', save_options);
  document.getElementById("options-disable-anim").addEventListener('click', save_options);
  document.getElementById("options-old-logo").addEventListener('click', save_options);
  document.getElementById("options-list-display").addEventListener('click', save_options);
  document.getElementById("options-navbar").addEventListener('click', save_options);
});
