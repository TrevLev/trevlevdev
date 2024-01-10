/* eslint-disable no-bitwise */
const randomBase64 = (): string => {
  const base64Chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const buffer = new ArrayBuffer(8);
  const float64 = new Float64Array(buffer);
  const uint16 = new Uint16Array(buffer);

  float64[0] = Math.random();

  // Extract 48 useful bits from the mantissa
  const mantissaUpper = uint16[2]; // Upper part of the mantissa (bits 32-47)
  const mantissaMiddle = uint16[1]; // Middle part of the mantissa (bits 16-31)
  const mantissaLower = uint16[0]; // Lower part of the mantissa (bits 0-15)

  return (
    base64Chars[mantissaUpper >>> 10] + // First 6 bits from mantissaUpper
    base64Chars[(mantissaUpper >>> 4) & 0x3f] + // Next 6 bits from mantissaUpper
    base64Chars[((mantissaUpper & 0x0f) << 2) | (mantissaMiddle >>> 14)] + // Last 4 bits from mantissaUpper and first 2 bits from mantissaMiddle
    base64Chars[(mantissaMiddle >>> 8) & 0x3f] + // Next 6 bits from mantissaMiddle
    base64Chars[(mantissaMiddle >>> 2) & 0x3f] + // Next 6 bits from mantissaMiddle
    base64Chars[((mantissaMiddle & 0x03) << 4) | (mantissaLower >>> 12)] + // Last 2 bits from mantissaMiddle and first 4 bits from mantissaLower
    base64Chars[(mantissaLower >>> 6) & 0x3f] + // Next 6 bits from mantissaLower
    base64Chars[mantissaLower & 0x3f]
  ); // Last 6 bits from mantissaLower
};

export default randomBase64;
