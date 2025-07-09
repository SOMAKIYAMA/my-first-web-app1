// ここからコードを書いてください
export function setupConverter() {
  // ここに単位のデータを定義するのじゃ

  // 長さの単位とその基準値（メートルに対する比率）を定義した配列じゃ
  const lengthUnit = [
    { name: "meter", base: 1 }, // メートルを基準（1）とする
    { name: "kilometer", base: 1000 }, // 1キロメートルは1000メートル
    { name: "centimeter", base: 0.01 }, // 1センチメートルは0.01メートル
    { name: "millimeter", base: 0.001 }, // 1ミリメートルは0.001メートル
    { name: "inch", base: 0.0254 }, // 1インチは約0.0254メートル
    { name: "foot", base: 0.3048 }, // 1フィートは約0.3048メートル
    { name: "yard", base: 0.9144 }, // 1ヤードは約0.9144メートル
    { name: "mile", base: 1609.344 }, // 1マイルは約1609.344メートル
  ];

  // converter-form を取得するのじゃ
  const converterForm = document.querySelector(".converter-form"); // これを追加するのじゃ

  // ここから次のステップのコードを書くとよいぞ
  // HTML要素を取得するのじゃ
  const inputValue = document.querySelector(".converter-input"); // 入力値のinput要素
  const fromUnit = document.querySelector(".converter-from"); // 変換元のselect要素
  const toUnit = document.querySelector(".converter-to"); // 変換先のselect要素
  const result = document.querySelector(".converter-result"); // 結果表示のdiv要素

  // ドロップダウンリストの選択肢を一度空にするのじゃ
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  // lengthUnit配列の各単位をループで処理し、ドロップダウンリストに追加するのじゃ
  for (const unit of lengthUnit) {
    // 変換元ドロップダウンにオプションを追加
    fromUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
    // 変換先ドロップダウンにオプションを追加
    toUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
  }

  // 初期値として、変換元と変換先の単位をあらかじめ選択しておくのじゃ
  // 例えば、変換元を最初の単位、変換先を2番目の単位にするなどじゃな
  if (fromUnit.options.length > 0) {
    fromUnit.selectedIndex = 0; // 最初のオプションを選択
  }
  if (toUnit.options.length > 0) {
    toUnit.selectedIndex = 1; // 2番目のオプションを選択
  }

  // ここから次のステップのコードを書くとよいぞ

  // 変換を実行する関数を定義するのじゃ
  function convert() {
    // 入力値を取得し、数値に変換するのじゃ
    const value = parseFloat(inputValue.value);

    // もし数値ではない場合はエラーメッセージを表示して処理を中断するのじゃ
    if (isNaN(value)) {
      result.textContent = "Please enter a valid number";
      return; // ここで処理を終えるのじゃ
    }

    // 選択された変換元の単位の基準値を取得するのじゃ
    const fromBase = fromUnit.value;
    // 選択された変換先の単位の基準値を取得するのじゃ
    const toBase = toUnit.value;

    // 単位変換の計算を行うのじゃ
    // (入力値 * 変換元の基準値) を計算し、それを変換先の基準値で割ることで、変換後の値が出るのじゃ
    const converted = (value * fromBase) / toBase;

    // 結果を整形して表示するのじゃ
    // toFixed(3) で小数点以下3桁に丸めるのじゃ
    // lengthUnit[fromUnit.selectedIndex].name で、選択されている単位の名前を取得するのじゃ
    result.textContent = `${value} ${
      lengthUnit[fromUnit.selectedIndex].name
    } = ${converted.toFixed(3)} ${lengthUnit[toUnit.selectedIndex].name}`;
  }

  // ここから次のステップのコードを書くとよいぞ
  // フォーム全体の'input'イベントを監視するのじゃ
  // これにより、入力欄の値が変わったり、ドロップダウンリストの選択が変わるたびにconvert関数が実行されるぞ
  converterForm.addEventListener("input", convert);

  // ページが読み込まれたときに、一度変換を実行して初期値を表示するのじゃ
  convert();
}
