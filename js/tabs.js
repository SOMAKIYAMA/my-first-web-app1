// ここからコードを書いてください

export function setupTabs() {
  // Homeリンクの要素を取得するのじゃ
  const homeLink = document.querySelector('[data-tab="home"]');
  // Converterタブの要素を取得するのじゃ
  const converterTab = document.querySelector('[data-tab="converter"]');

  // Homeセクションの要素を取得するのじゃ
  const homeSection = document.getElementById("home");
  // Converterセクションの要素を取得するのじゃ
  const converterSection = document.getElementById("converter");

  // Homeリンクがクリックされたときの処理じゃ
  homeLink.addEventListener("click", () => {
    // Converterセクションを非表示にする（hiddenクラスを追加）
    converterSection.classList.add("hidden");
    // Homeセクションを表示する（hiddenクラスを削除）
    homeSection.classList.remove("hidden");
  });

  // Converterタブがクリックされたときの処理じゃ
  converterTab.addEventListener("click", () => {
    // Homeセクションを非表示にする（hiddenクラスを追加）
    homeSection.classList.add("hidden");
    // Converterセクションを表示する（hiddenクラスを削除）
    converterSection.classList.remove("hidden");
  });
}
