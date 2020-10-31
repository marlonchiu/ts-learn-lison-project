const devConfig = {
  host: 'localhost',
  port: 3306,
  database: 'ts',
  user: 'root',
  password: '123456',
}

const prodConfig = {
  host: 'xxx.xxx.xxx.xxx',
  database: 'ts',
  port: 3306,
}

const config = process.env.NODE_ENV === 'development' ? devConfig : prodConfig

module.exports = config
