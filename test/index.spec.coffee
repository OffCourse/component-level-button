require './helpers'

describe "Level Button Component", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = []
    { @Component } = mockModule moduleUnderTest, mockModules

  afterAll ->
    disableMocks()

  Given -> 
    testdom "<html><body></body></html>"
    @setLevel = () -> 

  describe "type is not set", ->
    When  -> @subject  = renderElement @Component, { @setLevel }
    Then  -> @classes = @subject.className.split ' '
    And   -> @classes.includes "btn"
    And   -> !@classes.includes "btn-is-active"

  describe "type is set but not current", ->
    Given -> 
      type = "foo"
      current = false
      @props = { @setLevel, current, type }
    When  -> @subject  = renderElement @Component, @props
    Then  -> @classes = @subject.className.split ' '
    And   -> @classes.includes "btn"
    And   -> @classes.includes "btn-foo"
    And   -> !@classes.includes "btn-is-active"


  describe "type is set and current", ->
    Given -> 
      type = "foo"
      current = true
      @props = { @setLevel, current, type }
    When  -> @subject  = renderElement @Component, @props
    Then  -> @classes = @subject.className.split ' '
    And   -> @classes.includes "btn-is-active"
