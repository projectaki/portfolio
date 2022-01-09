test('adds 1 + 2 to equal 3', () => {
  expect(
    [
      {
        imgUrl: 'assets/profile-icon.png',
        func: () => {
          alert('profile');
          //this.router.navigate(['']);
        },
      },
      {
        imgUrl: 'assets/projects-icon.png',
        func: () => {
          alert('projects');
          //this.router.navigate(['']);
        },
      },
      {
        imgUrl: 'assets/skills-icon.png',
        func: () => {
          alert('skills');
          //this.router.navigate(['']);
        },
      },
      {
        imgUrl: 'assets/contact-icon.png',
        func: () => {
          alert('contact');
          //this.router.navigate(['']);
        },
      },
      {
        imgUrl: 'assets/blog-icon.png',
        func: () => {
          alert('blog');
          //this.router.navigate(['']);
        },
      },
    ].length
  ).toBe(5);
});
