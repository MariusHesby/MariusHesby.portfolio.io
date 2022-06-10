import JavascriptFrameworksCA from '../../content/cards/JavascriptFrameworksCA';
import CssFrameworksCA from '../../content/cards/CssFrameworksCA';
import WorkflowCA from '../../content/cards/WorkflowCA';

export default function IndexProjects() {
  return (
    <div className="md:col-span-2 px-5 py-14 sm:px-10 sm:py-28">
      <h2>A neat collection<br />of some of my<br />projects</h2>
      <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-14 mb-14">
        <JavascriptFrameworksCA />
        <CssFrameworksCA />
        <WorkflowCA />
      </div>
    </div>
  );
} 