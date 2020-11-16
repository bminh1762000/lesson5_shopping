const INITIAL_STATE = {
  sections: [
    {
      category: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      size: "medium",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      category: "jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 2,
      size: "medium",
      linkUrl: "shop/jackets",
    },
    {
      category: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1589187832032-3e560ed4e6b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 3,
      size: "medium",
      linkUrl: "shop/sneakers",
    },
    {
      category: "womens",
      imageUrl:
        "https://images.unsplash.com/photo-1567966038694-4304ba095228?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      category: "mens",
      imageUrl:
        "https://images.unsplash.com/photo-1557275099-861f0a0f5f32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
