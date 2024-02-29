import { AppCurrencyPipe } from './appCurrency.pipe';

describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new AppCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
