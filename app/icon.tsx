import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 20,
          background: '#1e293b', // Slate-800
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f8fafc', // Slate-50
          borderRadius: '20%', // Soft rounded square (like an app icon)
          fontWeight: 700,
          border: '1.5px solid #334155', // Slate-700 border for contrast
        }}
      >
        J
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
