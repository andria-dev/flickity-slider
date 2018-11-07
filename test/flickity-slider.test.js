describe('<flickity-slider>', () => {
  let el

  describe('Regsitration', () => {
    beforeEach(() => {
      el = fixture('simple')
    })

    it('is an element', () => {
      expect(el).to.not.be.equal(undefined)
      expect(el instanceof HTMLElement).to.be.true
    })

    it('has an instance of Flickity', () => {
      expect(el._flickity).to.not.be.equal(undefined)
      expect(el._flickity instanceof Flickity).to.be.true
    })
  })

  describe('Slotted children', () => {
    
  })
})