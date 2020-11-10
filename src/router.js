const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Running App} exact={true}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
