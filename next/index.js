/**
 *  react的ssr 服务端渲染
*/
// 1. next 项目中 pages目录下 一个自目录为一个路由


// 2. next.js 的预渲染
// 分为静态生成和服务端渲染

/**
 *  2.1 静态生成 （使用getStaticProps包装组件）
 *  静态生成会在编译阶段就为路由生成一份html文件 ，这份文件被真正生成，并在请求时被复用
 *  在getStaticProps的请求会被服务端请求
*/

/**
 *  2.2 服务端 渲染 （使用getServerSideProps包装组件）
 *  每次请求会重新生成html模版，这种情况一般是你的路由的html展示 会因为数据会发生重大变化 在数据没有得到之前是不方便做dom展示的
*/

// 怎么做node应用的监控？ pm2;