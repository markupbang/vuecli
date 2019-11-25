# my-project

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### My issue
vue.config.js에 전역 scss 불러올시 기존 data로 선언하면 불러오지 못하고 에러띄움
 : prependData로 바꾸어 선언해주면 해결
