import { NatalChartSuryaImageProxyMiddleware } from './natal-chart-surya-image-proxy.middleware';

xdescribe('SuryaImageProxyMiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new NatalChartSuryaImageProxyMiddleware()).toBeDefined();
  });
});
