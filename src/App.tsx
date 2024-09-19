import danielImg from './assets/image-daniel.jpg';
import jeanetteImg from './assets/image-jeanette.jpg';
import jonathanImg from './assets/image-jonathan.jpg';
import kiraImg from './assets/image-kira.jpg';
import patrickImg from './assets/image-patrick.jpg';
import Card from './components/Card';

function App() {
  return (
    <>
      <main className="pt-[71px] lg:pt-[164px] px-6 lg:px-0">
        <h1 className="hidden">Testimonials grid section</h1>
        <div className="max-w-[1100px] w-full mx-auto grid lg:grid-cols-4 lg:grid-rows-2 gap-6 lg:gap-[30px]">
          <Card
            authorImg={danielImg}
            authorName="Daniel Clifford"
            testimonialTitle="I received a job offer mid-course, and
        the subjects I learned were current, if not more so, in the company I
        joined. I honestly feel I got every penny’s worth."
            testimonialContent="I was an EMT for many years before I joined the bootcamp. I’ve been
        looking to make a transition and have heard some people who had an
        amazing experience here. I signed up for the free intro course and found
        it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was
        the best - and most grueling - time of my life. Since completing the
        course, I’ve successfully switched careers, working as a Software
        Engineer at a VR startup."
            hasBackgroundQuote={true}
            backgroundColor="violet"
            avatarBorder={true}
            className="lg:col-span-2"
          />
          <Card
            authorImg={jonathanImg}
            authorName="Jonathan Walters"
            testimonialTitle="The team was very supportive and kept
        me motivated"
            testimonialContent="I started as a total newbie with virtually no coding
        skills. I now work as a mobile engineer for a big company. This was one
        of the best investments I’ve made in myself."
            backgroundColor="gray"
          />
          <Card
            authorImg={jeanetteImg}
            authorName="Jeanette Harmon"
            testimonialTitle="An overall wonderful and rewarding
        experience"
            testimonialContent="Thank you for the wonderful experience! I now have a job I
        really enjoy, and make a good living while doing something I love."
          />
          <Card
            authorImg={patrickImg}
            authorName="Patrick Abrams"
            testimonialTitle="Awesome teaching support from TAs who
        did the bootcamp themselves. Getting guidance from them and learning
        from their experiences was easy."
            testimonialContent="The staff seem genuinely concerned about my progress which I find
        really refreshing. The program gave me the confidence necessary to be
        able to go out in the world and present myself as a capable junior
        developer. The standard is above the rest. You will get the personal
        attention you need from an incredible community of smart and amazing
        people."
            backgroundColor="black"
            avatarBorder={true}
            className="lg:col-span-2"
          />
          <Card
            authorImg={kiraImg}
            authorName="Kira Whittle"
            testimonialTitle="Such a life-changing experience. Highly
        recommended!"
            testimonialContent="Before joining the bootcamp, I’ve never written a line of
        code. I needed some structure from professionals who can help me learn
        programming step by step. I was encouraged to enroll by a former student
        of theirs who can only say wonderful things about the program. The
        entire curriculum and staff did not disappoint. They were very hands-on
        and I never had to wait long for assistance. The agile team project, in
        particular, was outstanding. It took my learning to the next level in a
        way that no tutorial could ever have. In fact, I’ve often referred to it
        during interviews as an example of my developent experience. It
        certainly helped me land a job as a full-stack developer after receiving
        multiple offers. 100% recommend!"
            className="lg:row-start-1 lg:col-start-4 lg:row-span-2"
          />
        </div>
      </main>
      <footer>
        <div className="pt-8 pb-4 text-center text-[11px]">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/bricard-dev">Bastien Ricard</a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
