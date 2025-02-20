import React from 'react';
import './ComponentAnalysis.css';

const ComponentAnalysis = () => {
  return (
    <div className="analysis-sections">
      {/* Input Analysis Section */}
      <section className="analysis-section">
        <h2 className="section-header">Input Analysis</h2>
        <h4>→ Inputs change the internal state of a component</h4>
        <p>In this section I analyze the experience of using the accordion components in each website while finding and comparing its Learnability, Memorability, and Efficiency</p>
        <div className="table-container">
          <table className="analysis-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>ML Website</th>
                <th>Stephen King</th>
                <th>DoggieLawn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="category-cell"><b>Mouse/Touchpad</b></td>
                <td>
                  <ul className="analysis-list">
                    <li>Single click to expand/collapse</li>
                    <li>Hover state over '+' sign shows background change</li>
                    <li>Accordion only expands when clicking on '+' sign, 
                      it does not work clicking on the text on div</li>
                    <li>Text selection enabled (links inside accordion)</li>
                    <li><b>No visual feedback on click and No visual cue when hovering over</b></li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>Single click to expand/collapse</li>
                    <li>Click on either text or 'arrow symbol' icon</li>
                    <li>Feels more intuitive</li>
                    <li>Text selection enabled  (links inside the accordion)</li>
                    <li>No visual feedback on click and No visual cue when hovering over</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li><b>No visual cue when hovering over</b></li>
                    <li>Can click anywhere inside the div (title or icon)</li>
                    <li>Box with borders on expansion, it surrounds the div </li>
                    <li>Feels intuitive</li>
                    <li>Clear visual hierarchy</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="category-cell"><b>Keyboard</b></td>
                <td>
                  <ul className="analysis-list">
                    <li>No Tab + enter/space enabled</li>
                    <li>Must click plus sign to see contents</li>
                    <li>Can select contents with Tab + Enter after clicking and expanding the accordion</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>No Tab + enter/space enabled</li>
                    <li>Must click 'arrow symbol' symbol or text</li>
                    <li>The tab directs to a copy icon to copy the link to the specific question selected rather than expanding the accordion.</li>
                    <li>Links within FAQ are tabbable</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>Full Tab + Enter/Space support</li>
                    <li>Intuitive navigation across all dropdowns/accordions</li>
                    <li>Clear focus indicators</li>
                    <li>Logical tab order (After clicking I can select the contents with Tab + Enter)</li>
                  </ul>
                </td>
                </tr>
                <tr>
                  <td className="category-cell"><b>Learnability</b></td>
                    <td>
                      <ul className='analysis-list'>
                      <li><b>Moderate</b></li>
                        <li>Limited interaction areas reduce discoverability</li>
                        <li>Restricted to '+' sign clicks creates learning barrier</li>
                        <li>Minimal visual feedback makes learning interaction points difficult</li>
                        <li>Restricted to '+' sign clicks creates learning barrier</li>
                        <li>Minimal visual feedback makes learning interaction points difficult</li>
                      </ul>
                  </td>
                  <td>
                      <ul className='analysis-list'>
                      <li><b>Good</b></li>
                        <li>Whole area is clickable improves discovery</li>
                        <li>Consistent behavior across sections</li>
                        <li>Clear visual hierarchy</li>
                      </ul>
                  </td>

                  <td>
                      <ul className='analysis-list'>
                      <li><b>Great</b></li>
                        <li>Clear visual organization with topic headers</li>
                        <li>Consistent and intuitive interaction model</li>
                        <li>Full keyboard support that aids discovery</li>
                      </ul>
                  </td>
                </tr>

                <tr>
                  <td className="category-cell"><b>Memorability</b></td>
                    <td>
                      <ul className='analysis-list'>
                        <li>Unintuitive interaction pattern</li>
                        <li>Lack of visual cues makes remembering interaction points harder</li>
                      </ul>
                  </td>

                  <td>
                      <ul className='analysis-list'>
                        <li>Standard Accordion pattern</li>
                        <li>Consistent interaction model</li>
                      </ul>
                  </td>

                  <td>
                      <ul className='analysis-list'>
                        <li>Logical organization aids recall</li>
                        <li>Consistent visual and interaction patterns</li>
                      </ul>
                  </td>
                </tr>

                <tr>
                  <td className="category-cell"><b>Efficiency</b></td>
                    <td>
                      <ul className='analysis-list'>
                        <li>Small click target reduces speed</li>
                        <li>Limited keyboard support hampers efficiency</li>
                      </ul>
                  </td>

                  <td>
                      <ul className='analysis-list'>
                        <li>Clear visual organization with topic headers</li>
                        <li>Consistent and intuitive interaction model</li>
                        <li>Full keyboard support aids discovery</li>
                      </ul>
                  </td>

                  <td>
                      <ul className='analysis-list'>
                        <li>Multiple input methods support different user preferences</li>
                        <li>Large click targets and keyboard support improve speed</li>
                        <li>Clear organization helps users find information quickly</li>
                      </ul>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>

        <div className="reflection-container">
          <h3 className="subsection-header">⟡ Input Analysis Reflection ⟡</h3>
          <p className="reflection-text">
            Through analyzing these three implementations, clear patterns emerge in terms of accessibility and user experience:
          </p>
          <ul className="reflection-list">
            <li>
              <strong>Interaction Flexibility:</strong> DoggieLawn's implementation stands out by offering multiple ways to interact with the accordion, making it more accessible to different user preferences and abilities.
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> There's a significant disparity in keyboard support. While DoggieLawn provides comprehensive keyboard navigation, the ML Website and Stephen King's site have limited keyboard functionality.
            </li>
            <li>
              <strong>Visual Feedback:</strong> The varying levels of visual feedback impact the learnability of each implementation. DoggieLawn's clear visual hierarchy and state changes make it more intuitive to use.
            </li>
          </ul>
        </div>
      </section>

      {/* Output Analysis Section */}
      <section className="analysis-section">
        <h2 className="section-header">Output Analysis</h2>
        <h4>→ Outputs are a representation of the state</h4>
        <h4>→ They differ in visual style like color, opacity, border thickness, 3D appearance (such as when a button looks pressed down).</h4>
        <div className="table-container">
          <table className="analysis-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>ML Website</th>
                <th>Stephen King</th>
                <th>DoggieLawn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="category-cell"><b>Visual States</b></td>
                <td>
                  <ul className="analysis-list">
                    <li>'+' changes to '-' when expanded</li>
                    <li>No color change on hover</li>
                    <li>No border changes</li>
                    <li>Content appears instantly</li>
                    <li> No animation transitions</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>'arrow symbol' rotates 90° when expanded</li>
                    <li>No hover state changes</li>
                    <li>Basic expand/collapse animation</li>
                    <li>No background color changes</li>

                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>A border appears on expansion</li>
                    <li>Smooth expansion animation</li>
                    <li>Green section headers</li>
                    <li>Clear visual hierarchy</li>
                    <li>Consistent Styling</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="category-cell"><b>Screen Reader Support</b></td>
                <td>
                  <ul className="analysis-list">
                    <li>No ARIA labels</li>
                    <li>Reads only visible text</li>
                    <li>No expanded/collapsed state announcements</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>Basic ARIA implementation</li>
                    <li>Announces "FAQ Question"</li>
                    <li> No state changes (expansion) announced</li>
                    <li>Copy link function announced</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>Full ARIA implementation</li>
                    <li>Announces expanded/collapsed states</li>
                    <li>Clear section headings</li>
                    <li>Proper semantic structure</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td className="category-cell"><b>Focus Order</b></td>
                <td>
                  <ul className="analysis-list">
                    <li>Only '+' sign is focusable</li>
                    <li> Content links focusable after expansion</li>
                    <li> Non-intuitive tab sequence</li>
                    <li> Limited keyboard navigation</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>Headers and copy icons focusable</li>
                    <li> Links within content focusable</li>
                    <li>Focus moves to copy icon first</li>
                    <li>Confusing tab order</li>

                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li> Logical top-to-bottom order</li>
                    <li> Section headers properly tagged</li>
                    <li> Clear focus indicators</li>
                    <li>Consistent navigation pattern</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="category-cell"><b>Interactive States</b></td>
                <td>
                  <ul className="analysis-list">
                    <li>Only expanded/collapsed states</li>
                    <li>No intermediate states</li>
                    <li>No loading states</li>
                    <li>Minimal state feedback</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>Basic expanded/collapsed</li>
                    <li>Copy link hover state</li>
                    <li> No loading states</li>
                    <li>Limited state indicators</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li> Multiple interactive states</li>
                    <li>Clear hover feedback</li>
                    <li>Smooth transition states</li>
                    <li>Comprehensive state indication</li>
                  </ul>
                </td> 
              </tr>
            </tbody>
          </table>
        </div>

        <div className="reflection-container">
          <h3 className="subsection-header">⟡ Output Analysis Reflection ⟡</h3>
          <p className="reflection-text">
            The output analysis reveals significant differences in how these implementations communicate state and changes to users:
          </p>
          <ul className="reflection-list">
            <li>
              <strong>Visual Feedback:</strong> DoggieLawn provides the most comprehensive visual feedback system, with clear state changes and animations that help users understand their interactions.
            </li>
            <li>
              <strong>Screen Reader Accessibility:</strong> There's a clear progression in screen reader support from the ML Website (minimal) to DoggieLawn (comprehensive), highlighting the importance of proper ARIA implementation.
            </li>
            <li>
              <strong>Focus Order:</strong> The logical focus order in DoggieLawn's implementation demonstrates how proper semantic structure can enhance both visual and non-visual navigation.
            </li>
            <li>
              <strong>State Communication:</strong> The varying approaches to communicating state changes impact both the usability and accessibility of each implementation, with DoggieLawn's multiple feedback methods serving the widest range of users.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ComponentAnalysis;