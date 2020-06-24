const cookieTokenResponse = (user, statusCode, res) => {
  const token = user.genJwtToken();
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    // secure: false,
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
  };

  res
    .status(statusCode)
    .cookie('jwt', token, cookieOptions)
    .json({ status: 'success', data: { token } });
};

module.exports = cookieTokenResponse;
