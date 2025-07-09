// tabs.js から setupTabs 関数を読み込むのじゃ
import { setupTabs } from "./js/tabs.js";
// converter.js から setupConverter 関数を読み込むのじゃ
import { setupConverter } from "./js/converter.js";

// ウェブページがすべて読み込まれたら、setupTabs 関数を実行するのじゃ
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  // setupConverter 関数を呼び出すのじゃ
  setupConverter();
});
