export {};

// 2つの型引数を持つ特殊な型
// Record<K, T>
// 同じ構造のデータを複数のメンバーに繰り返し設定する場合に便利

type Prefectures = 'Tokyo' | 'Chiba' | 'Osaka';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
  Osaka: { kanji_name: '大阪', confirmed_cases: 934 },
};
