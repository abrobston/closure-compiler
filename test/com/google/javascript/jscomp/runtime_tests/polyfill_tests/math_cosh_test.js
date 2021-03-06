/*
 * Copyright 2016 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.module('jscomp.runtime_tests.polyfill_tests.math_cosh_test');
goog.setTestOnly();

const testSuite = goog.require('goog.testing.testSuite');
const testing = goog.require('jscomp.runtime_tests.polyfill_tests.testing');

const {
  assertExactlyNaN,
  noCheck,
} = testing;

testSuite({
  testCosh() {
    assertEquals(1, Math.cosh(0));
    assertEquals(1, Math.cosh(noCheck(null)));
    assertEquals(Infinity, Math.cosh(Infinity));
    assertEquals(Infinity, Math.cosh(1e20));
    assertEquals(Infinity, Math.cosh(-1e20));
    assertEquals(Infinity, Math.cosh(-Infinity));
    assertExactlyNaN(Math.cosh(NaN));
    assertExactlyNaN(Math.cosh(noCheck('foo')));

    // Note: we get the last couple digits wrong, possibly due to rounding?
    assertRoughlyEquals(1.5430806348153, Math.cosh(1), 1e-13);
    assertRoughlyEquals(1.5430806348153, Math.cosh(-1), 1e-13);
  },
});
