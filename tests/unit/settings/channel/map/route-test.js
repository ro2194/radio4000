import {module, test} from 'qunit'
import {setupTest} from 'ember-qunit'

module('Unit | Route | settings/channel/map', function(hooks) {
	setupTest(hooks)

	test('it exists', function(assert) {
		let route = this.owner.lookup('route:settings/channel/map')
		assert.ok(route)
	})
})
