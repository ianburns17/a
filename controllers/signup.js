 export const sign = (req, res) => {
    res.render("signup", {
      title: "Sign Up",
      message: "Drop your contact below",
      confirm: "Let's Go",
    });
  }