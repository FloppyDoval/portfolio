import React from 'react';
import './ComponentAnalysis.css';

const ComponentAnalysis = () => {
  return (
    <div className="analysis-sections">
      {/* Input Analysis Section */}
      <section className="analysis-section">
        <h2 className="section-header">Input Analysis</h2>
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
                <td className="category-cell">Mouse/Touchpad</td>
                <td>
                  <ul className="analysis-list">
                    <li>Single click to expand/collapse</li>
                    <li>Hover state over '+' sign shows background change</li>
                    <li>Accordion only expands when clicking on '+' sign</li>
                    <li>Text selection enabled (links inside accordion)</li>
                    <li>No visual feedback on click</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>Single click to expand/collapse</li>
                    <li>Click on either text or 'arrow symbol' icon</li>
                    <li>Feels more intuitive</li>
                    <li>Text selection enabled</li>
                    <li>No visual feedback on click</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>Can click anywhere inside the div</li>
                    <li>Box with borders on expansion</li>
                    <li>Feels intuitive</li>
                    <li>Clear visual hierarchy</li>
                    <li>Comprehensive state indication</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="category-cell">Keyboard</td>
                <td>
                  <ul className="analysis-list">
                    <li>No Tab + enter/space enabled</li>
                    <li>Must click plus sign to see contents</li>
                    <li>Can select contents with Tab + Enter after clicking</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>No Tab + enter/space enabled</li>
                    <li>Must click 'arrow symbol' symbol or text</li>
                    <li>Tab focuses copy icon instead of expanding</li>
                    <li>Links within FAQ are tabbable</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>Full Tab + Enter/Space support</li>
                    <li>Intuitive navigation</li>
                    <li>Clear focus indicators</li>
                    <li>Logical tab order</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="reflection-container">
          <h3 className="subsection-header">Input Analysis Reflection</h3>
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
                <td className="category-cell">Visual States</td>
                <td>
                  <ul className="analysis-list">
                    <li>'+' changes to '-' when expanded</li>
                    <li>No color change on hover</li>
                    <li>No border changes</li>
                    <li>Content appears instantly</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>'arrow symbol' rotates 90° when expanded</li>
                    <li>No hover state changes</li>
                    <li>Basic expand/collapse animation</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>Border appears on expansion</li>
                    <li>Smooth expansion animation</li>
                    <li>Green section headers</li>
                    <li>Clear visual hierarchy</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="category-cell">Screen Reader Support</td>
                <td>
                  <ul className="analysis-list">
                    <li>No ARIA labels</li>
                    <li>Reads only visible text</li>
                    <li>No state announcements</li>
                  </ul>
                </td>
                <td>
                  <ul className="analysis-list">
                    <li>Basic ARIA implementation</li>
                    <li>Announces "FAQ Question"</li>
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
            </tbody>
          </table>
        </div>

        <div className="reflection-container">
          <h3 className="subsection-header">Output Analysis Reflection</h3>
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