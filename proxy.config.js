const proxy = [
    {
      context: '/api',
      target: 'http://bsabio-001-site1.btempurl.com',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;