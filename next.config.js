module.exports = {
  async headers() {
    return [
      {
        source: "/fonts/:font*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, immutable, max-age=31536000",
          },
        ],
      },
    ];
  },
};
