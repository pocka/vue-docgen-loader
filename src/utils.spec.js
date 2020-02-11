describe('#filterDescriptors', () => {
  const { filterDescriptors } = require('./utils')

  it('Should apply filter function to an array of descriptors', () => {
    const input = [
      {
        name: 'foo',
        required: true
      },
      {
        name: 'bar',
        required: false
      }
    ]

    const expected = [
      {
        name: 'foo',
        required: true
      }
    ]

    expect(filterDescriptors(input, d => d.required)).toEqual(expected)
  })

  it('Should apply filter function to key-value pairs', () => {
    const input = {
      foo: {
        name: 'foo',
        required: true
      },
      bar: {
        name: 'bar',
        required: false
      }
    }

    const expected = {
      foo: {
        name: 'foo',
        required: true
      }
    }

    expect(filterDescriptors(input, d => d.required)).toEqual(expected)
  })

  it('Should return falsy values as-is', () => {
    expect(filterDescriptors(null, d => d.required)).toBeNull()
    expect(filterDescriptors(void 0, d => d.required)).toBeUndefined()
  })
})
