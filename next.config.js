const withNextra = require('nextra')('nextra-theme-blog', './theme.config.tsx')
module.exports = withNextra(
  {
    // Next.jsの設定
    outputFileTracing: false,
    // 必要であれば他の設定も追加可能
  }
)
