export default function createInt8TypedArray(length, position, value) {
  // Step 1: Create an ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Step 2: Create a DataView to manage the buffer
  const view = new DataView(buffer);

  // Step 3: Check if the position is valid
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  // Step 4: Set the value at the specified position
  view.setInt8(position, value);

  // Return the DataView
  return view;
}
