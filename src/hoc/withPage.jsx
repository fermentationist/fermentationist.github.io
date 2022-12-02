const withPage = Component => {
  return ComponentWithPage = props => {
    return (
      <Page>
        <Component {...props} />
      </Page>
    )
  }
}

export default withPage;