import './App.css';
import kitchen from './images/kitchen.jpg'
import cave from './images/cave.jpg'
import hall from './images/hall.jpg'
import doors from './images/doors.jpg'
import doortrees from './images/doortrees.jpg'
import forest from './images/forest.jpg'
import monster from './images/monster.jpg'
import trees from './images/trees.jpg'
import gate from './images/gate.jpg'
import slip from './images/slip.jpg'
import victoryone from './images/victoryone.jpg'
import victorytwo from './images/victorytwo.jpg'
import victorythree from './images/victorythree.jpg'
import victoryfour from './images/victoryfour.jpg'
import victoryfive from './images/victoryfive.jpg'
import castlegate from './images/castlegate.jpg'
import killone from './images/monsterkill.jpg'
import killtwo from './images/killtwo.jpg'
import killthree from './images/killthree.jpg'
import killfour from './images/killfour.jpg'
import killfive from './images/killfive.jpg'
import killsix from './images/killsix.jpg'
import killseven from './images/killseven.jpg'
import caged from './images/caged.jpg'
import cornered from './images/cornered.jpg'
import corneredtwo from './images/corneredtwo.jpg'
import opentrees from './images/opentrees.jpg'
import castle from './images/castle.jpg'
import dodge from './images/dodge.jpg'
import running from './images/running.jpg'
import wolfpan from './images/wolfpan.jpg'
import lever from './images/lever.jpg'
import hide from './images/hide.jpg'
import throwpan from './images/throwpan.jpg'
import maze from './images/maze.jpg'
import fight from './images/fight.jpg'
import knights from './images/knights.jpg'
import staircase from './images/staircase.jpg'
import torch from './images/torch.jpg'
import door from './images/door.jpg'
import dark from './images/dark.jpg'
import killedmonster from './images/killedmonster.jpg'
import courtyard from './images/courtyard.jpg'
import corridor from './images/corridor.jpg'
import React, {useState} from "react";
import image from "./images/logo.jpg";
import 'semantic-ui-css/semantic.min.css';
import {
  Divider,
  Button,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import {useNavigate,Route,Routes,BrowserRouter as Router} from "react-router-dom"

const des = {
  0:"You wake up in pitch black darkness. After your eyes begin to adjust you make out very faintly that you are in a cave of some sort, whilst also noticing you are heavily injured and bleeding. You see a very faint light in the darkness ahead",
  1:"You can faintly make out a doorway, and upon reaching it notice a glass window letting in some moonlight as well as two doors. The inside of the left door is dark and foreboding and the right door is dimly lit with vegetation growing aroud it.",
  2:"You reach the window and see that you are on the second floor of a grand castle looking building, and that the dim light illuminating the room is shining from the full moon above you in the sky. Whilst looking, you hear a loud crash reverberate through the left door.",
  3:"You enter into a large hall in ruins. The light is coming from a large pitfall in the ceiling draping light onto a darkened entryway that you can make out through the rubble",
  4:"As you emerge the rubble collapses behind you and blocks you into the room. You look up to find yourself in a dark kitchen.There is only only one exit, a rusted metal back door that appears to lead outside into a forest, however a rusted padlock and chain fasten it shut. You frantically look around for something that could possibly remove the lock and find a frying pan and a sharp knife. ",
  5:"You swing the frying pan as hard as you can and smash it against the padlock. With a large crash the lock shatters into a million pieces and the door swings violently open before crashing into the building and falling off of its hinges, loudly echoing through the forest. In the distance you hear an animal cry out as if awoken.",
  6:"You start running away from the castle and into the forest as fast as your bleeding body will allow. However, a feeling of dread starts to build up as you sense something begin to close in on you.",
  7:"You turn to see a hideous creature racing just behind you on all fours, baring its teeth and posturing as if it is about to dive onto you.",
  8:"You throw your body to the side as the creature leaps in your direction, and you watch it fly past you before crashing inelegantly into the ground where you once stood.",
  9:"You take off running in the opposite direction. However, the creature recovers quickly and you hear the rumbling and branches breaking behind you that confirm the mosnter has begun chasing you again. As your adrenaline begins to wear off you can feel your body starting to fatigue. You see the trees clear ahead of you as the forest comes to an end into an open area, and to your right you notice a wooden shack surrounded by thick trees. ",
  10:"test",
  11:"Out of nowhere a human-like figure grabs onto you and you instinctively try to pull yourself away. you struggle down the hall until the attacker throws their body tipping you both over crashing into the ground. In the commotion you gain a brief opportunity to strike the attacker back ",
  12:"You daze the attacker and slip out to begin running, following the hall downstairs into a basement and shut the door behind you, plunging yourself into darkness ",
  13:"keeping yourself firmly pushed up against the wall so you dont get discombobulated you come across what feels like a lever",
  14:"You edge along further against the wall until suddenly as you routinely shift your weight against the wall it falls, and you realise you leant against a door as you flail through the doorway. You hear a click as the door shuts itself behind you. You see nothing but a staircase spiralling down ",
  15:"You try desperately to open the door but some sort of contraption so only allow the door to open from the outside has clicked into place and you are unable to open it. There is no other choice.",
  16:"You emerge in a corridor going left and right. Just after you close the door behind you you hear a large crash followed by rumbling that continues to get louder",
  17:"Staying close to the edge of the treeline  you edge towards a direction you pray is away from the hell that you emerged from, but as you look around nervously you spot a large wolf-like monster sprinting towards you from the forest",
  18:"You move as quickly as you can to the trees and try to keep a tree in between you and the monster to stay out of sight, however the monster saw you run towards the trees, so you know losing it completely will be tricky. You hear the monster stop where you started hiding, and then quickly accelerate towards where you are hiding",
  19:"test",
  20:"You try to stay as quiet as possible as you hear the monster crash past you and stop just ahead of where you are, obviously showing that it knows you can't be far. Feeling that you don't have much time to act you decide to throw the frying pan ",
  21:"You throw the frying pan as far as you can and it collides into a tree echoing loudly. The monster turns and rushes towards the sound as you stay hidden behind the tree ",
  22:"Torches high up along each wall are suddenly illuminated and you see two doors in the room, and one against the wall slightly ahead of you. ",
  23:"You step through the door and enter a short corridor with nothing but a short staircase spiralling down ",
  24:"You open the door and your eyes are flooded with vision as the dim moonlight illuminates a short staircase in front of you opening up into a courtyard surrounded by knight statues. Through an archway pointing away from the castle you can see the moon high up in the sky above the castle gardens. This is your chance, you realise that now you can try and leave  ",
  25:"You take off sprinting but very quickly you hear a large unified crash echo behind you. Looking over your shoulder you see that all of the knight statues have animated and are all chasing towards you. You come to a fork in the path and you realise you must make a quick decision before the knights corner you",
  26:"With the knights still on your tail you run further until you come to another fork in the path. To your left you see more knight statues that are stationary and to your right you see green arches made up of greenery and plants leading down the path",
  27:"You bump into a few miscellaneous items of furniture and obstacles but you continue directly forwards slowly, holding your arms out and walking slowly to avoid a hard collision with anything. Eventually you reach a wall on the opposite side of the room and find what feels like a door ",
  28:"You stalk slowly to make as little noise as possible. As you go along the main path you notice a subtle side path leading to a gate",
  29:"You wander into a few dead ends until eventually you find a path that continues away from the castle, until you come across two paths that diverge into a path with some more knight statues, and a path through green arches and plants ",
  30:"You take off running, the trees (along with the slight head-start) mean that you are able to keep ahead of the monster, however you know that you won't be able to keep this up for long. You have to think of something quickly as you run past another tree",
  31:"You slow down and cut backwards around the tree, as the monster is moving too quickly to change direction so quickly it takes longer to slow and loop around the tree, in which time you toss the frying pan to one side and dive to the ground. The monster is confused and begins to look around",
  32:"In the darkness you are quickly discombobulated and eventually bleed to death lost in the cave.",
  33:"You do not have nearly enough energy to climb so high in this state and quickly realise this as you plummet to your death from high up on the wall.",
  34:"The sharp knife is able to delicately pry open the lock. Carefully you walk out into the forest and walk away into the night never to see the castle or its horrors ever again.",
  35:"You run out of the forest but the monster is considerably faster than you and out of the forest you have no way of dodging or hiding. The monster quickly catches you and you die.",
  36:"Adrenaline fails as your body begins to fatigue and the frying pan you are tightly clenching starts to droop as your sprint slows to a choppy jog, exhausted you stop and turn around to heave your last breath ",
  37:"Your attack barely affects the monster as it bares down on you and you are killed.",
  38:"The monster quickly notices the movement as you try to crawl away and you are defenceless lying on your front on the floor and are killed",
  39:"The monster continues to search slowly but begins to move away from you as it continues its search. You stay completely silent for what feels like an eternity until you finally decide to get up and move briskly away from the direction the monster went in. You reach a clearing in the forest and leave it behind, never to return",
  40:"The monster hears you and immediately switches focus from the frying pan to chase you down and you are killed.",
  41:"You leave as quietly as you can, stalking through the forest until you are convinced that you are far enough and you start running. Eventually you come to a clearing in the forest and you exit the forest never to return again",
  42:"The attempt doesn't even make the monster flinch as it immediately turns toward the direction it was hit from and hunts you down and you are killed.",
  43:"You can feel the creature grow closer every second, however you make it to the thick trees and are able to duck and weave through, whilst the creature is unable to and starts to fight through the thick trees. You head into the ruined shack and find a shotgun amidst everything. You go back and shoot the monster and leave the forest safely.",
  44:"In the open area your size and agility to weave through trees is no longer in effect and the creature easily catches you - you are helpless and defenceless",
  45:"Before you can even begin to get a grip on the tree you are caught and ripped to shreds",
  46:"Your attack hits hard enough to send the monster tumbling forwards using its weight against them and it collides against a tree stunning it. You see the trees beginning to clear in the distance and run towards that, you hear the monster start running again in the distance but by now you are out of the forest, leaving the castle and the monster behind you as you try to find civilisation",
  47:"Your attack is ineffective and the figure regains their senses before tearing you limb from limb",
  48:"You run as fast as you can away from the sound only to run into a animated suit of armour. You turn to run away but another figure is chasing behind you. You are trapped between the two and are killed.",
  49:"You head down the staircase carefully and emerge into a dark room filled with vials and cages. The walls are covered in blood. You begin to get uneasy and turn to leave but before you can you are grabbed from behind and you are never heard from again.",
  50:"You are met with a dead end and the knights corner you in and kill you",
  51:"You reach a garden area with no escape from the horde of knights that are chasing you and you are torn to shreds",
  52:"You walk past the knights to see the front gates of the castle. You run through them to your escape and leave the castle behind forever",
  53:"You reach a garden area with no exit, and suddenly a horde of sentient knight statues corner you and kill you",
  54:"You exit the gate to see that you are free from the castle and leave to never return ever again.",
  55:"You run past the statues which quickly animate as you loudly run past to join the other knights chasing you. However, you see what appears to be the front gates of the castle in your path and you run as fast as you can to make it to it after you make it past the gates you realise that you physically cannot run any more as you collapse to the ground. Expecting that this is the end you look behind to the knights, but to your surprise they are all gathered just behind the gates as if they aren't allowed to leave the castle. You bring yourself to your feet and continue to slowly walk away from the castle and all of the horrors inside of it",
}


const Home = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            direction='right'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item style={{height:"75px"}}>             
            </Menu.Item>
            <Menu.Item as='a' href="/password">
              <Button content="Enter Code"/>
            </Menu.Item>
            <Menu.Item as='a' href="/AAAAAA">
              <Button content="Story 1"/>
            </Menu.Item>
            <Menu.Item as='a' href="/">
              <Button content="Story 2"/>
            </Menu.Item>
            <Menu.Item as='a' href="/">
              <Button content="Story 3"/>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic style = {{padding: "0"}}>
                <header>
                  <a href = "/"><img src={image} alt="Header Visual" className="why" /></a>
                  <Icon 
                    name='bars' 
                    size='big' 
                    className="BARS"
                    onClick={() => setVisible(!visible)} 
                  />
                </header>
              <div id="nav">
              <div className="argh">
                  <a href = "/password"><button style={{borderRadius:"10%", width:"150%"}}>Enter Code</button></a>
                </div>
                <div className="argh">
                  <a href = "/AAAAAA"><button style={{borderRadius:"10%", width:"150%"}}>Story 1</button></a>
                </div>
                <div className="argh">
                  <a href = "/"><button style={{borderRadius:"10%", width:"150%"}}>Story 2</button></a>
                </div>
                <div className="argh">
                  <a href = "/"><button style={{borderRadius:"10%", width:"150%"}}>Story 3</button></a>
                </div>
              </div>
              <div id="wrapper">
                <div class="story">
                  <h2>Home</h2>

                  <Divider style={{height:"2px", width:"120vw", background:"white", margin:"20px 0"}} />

                  <h4>Epic Short Stories</h4>

                  <p className="homeText">
                    In this website you will find many epic "choose your own adventure" style stories 
                    (although currently there is only Story One available.)
                  </p>
                </div>
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    </div>
  );
};

const PwordPage = () => {
  const validRoutes = ['/AAAAAA', '/', '/RAWRXD', '/QWEUDJ', '/JIWDJW', '/PADIKW', '/LLLPQW', '/TIBLGA', '/NFIWTV', '/CBWOCW', '/WEWEWE', '/VBGVQQ', '/YETYWE', '/UTYSSA', '/JOJOPE', '/GSGUUI', '/DHWDGW', '/DWDWDW', '/CBSIWE', '/QLAMDS', '/PLASJE', '/MCLEWQ', '/MPFWJD', '/MCNSCC', '/CSDWWW', '/DDSFAS', '/QQEWQQ', '/BQIDBE', '/VDUWYD', '/FTEISL', '/ENZBBB', '/IIIYUJ']
  const [visible, setVisible] = useState(false);
  var [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    password = password.toUpperCase()
    if (password.length === 6) {
      const targetPath = `/${password}`;
      if (validRoutes.includes(targetPath)) {
        navigate(targetPath);
      } else {
        setErrorMessage('This code does not match any existing route.');
      }
    } else {
      setErrorMessage('Please enter a 6-digit code!');
    }
  };

  return (
    <div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item style={{height:"75px"}}>
          </Menu.Item>
          <Menu.Item as="a" href="/password">
            <Button content="Enter Code" />
          </Menu.Item>
          <Menu.Item as="a" href = "/AAAAAA">
            <Button content="Story 1" />
          </Menu.Item>
          <Menu.Item as="a" href = "/">
            <Button content="Story 2" />
          </Menu.Item>
          <Menu.Item as="a" href = "/">
            <Button content="Story 3" />
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          <Segment basic style={{ padding: "0" }}>
            <header>
              <a href="/">
                <img src={image} alt="Header Visual" className="why" />
              </a>
              <Icon
                name="bars"
                size="big"
                className="BARS"
                onClick={() => setVisible(!visible)}
              />
            </header>

            <div id="nav">
              <div className="argh">
                <a href="/password"><button style={{ borderRadius: "10%", width: "150%" }}>Enter Code</button></a>
              </div>
              <div className="argh">
                <a href="/AAAAAA"><button style={{ borderRadius: "10%", width: "150%" }}>Story 1</button></a>
              </div>
              <div className="argh">
                <a href="/"><button style={{ borderRadius: "10%", width: "150%" }}>Story 2</button></a>
              </div>
              <div className="argh">
                <a href="/"><button style={{ borderRadius: "10%", width: "150%" }}>Story 3</button></a>
              </div>
            </div>

            <div id="wrapper">
              <div class="story">
              <h2>Enter Code</h2>

                <Divider style={{height:"2px", width:"120vw", background:"white", margin:"20px 0"}} />
                <div className="pcontent">
                  <h3 style={{padding:"50px"}}>Enter 6 digit Code (example AAAAAA):</h3>
                  <input
                    type="text"
                    className="box"
                    value={password}
                    maxLength={6}
                    onChange={handlePasswordChange}
                  />
                  <div class="ui hidden divider"></div>
                  <button style={{borderRadius:"10%", width:"50%"}} onClick={handleSubmit}>Submit</button>

                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </div>
              </div>
            </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

const StoryOne = (props) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            direction='right'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item style={{height:"75px"}}>           
            </Menu.Item>
            <Menu.Item as='a' href="/password">
              <Button content="Enter Code"/>
            </Menu.Item>
            <Menu.Item as='a' href="/AAAAAA">
              <Button content="Story 1"/>
            </Menu.Item>
            <Menu.Item as='a' href="/">
              <Button content="Story 2"/>
            </Menu.Item>
            <Menu.Item as='a' href="/">
              <Button content="Story 3"/>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic style = {{padding: "0"}}>
                <header>
                  <a href = "/"><img src={image} alt="Header Visual" className="why" /></a>
                  <Icon 
                    name='bars' 
                    size='big' 
                    className="BARS"
                    onClick={() => setVisible(!visible)} 
                  />
                </header>
              <div id="nav">
              <div className="argh">
                  <a href = "/password"><button style={{borderRadius:"10%", width:"150%"}}>Enter Code</button></a>
                </div>
                <div className="argh">
                  <a href = "/AAAAAA"><button style={{borderRadius:"10%", width:"150%"}}>Story 1</button></a>
                </div>
                <div className="argh">
                  <a href = "/"><button style={{borderRadius:"10%", width:"150%"}}>Story 2</button></a>
                </div>
                <div className="argh">
                  <a href = "/"><button style={{borderRadius:"10%", width:"150%"}}>Story 3</button></a>
                </div>
              </div>
              <div id="wrapper">
                <div class="story">
                  {props.death === "continue" ?
                  <h2>Story 1: The Castle</h2>
                  : <h2>Ending Page</h2>
                  }

                  <Divider style={{height:"2px", width:"120vw", background:"white", marginTop:"16px"}} />
                  {props.pass !== "none" &&
                    <p>Code:{props.pass}</p>
                  }
                  <div>
                    <img src={props.image} alt="Story Visual" style={{paddingBottom:"0", minHeight:"25vh", minWidth:"30vw", maxHeight:"40vh", maxWidth:"60vw"}} />
                  </div>


                  <Divider className="part" />
                  <div className="text">
                    <p>{props.descrip}</p>
                  </div>
                  <Divider className="full"/>
                    {props.three ?
                    <div class = "buttons">
                    <div className='buttonOption'><a href={props.pathone}><Button circular content="A" className="show"/></a><p>{props.a}</p></div>
                    <div className='buttonOption'><a href={props.pathtwo}><Button circular content="B" className="show"/></a><p>{props.b}</p></div>
                    <div className='buttonOption'><a href={props.paththree}><Button circular content="C" className="show"/></a><p>{props.c}</p></div>
                    </div>
                    : props.death === "continue" ?
                    <div class = "buttons">
                      <div className='buttonOption'><a href={props.pathone}><Button circular content="A" className="show"/></a><p>{props.a}</p></div>
                      <div className='buttonOption'><a href={props.pathtwo}><Button circular content="B" className="show"/></a><p>{props.b}</p></div> 
                    </div>
                    :
                    <div className = {props.death}>
                    <a href = {props.cont}><Button className= "square" content = "Continue"/></a>
                   </div>
                  }
                  <div class='options'>       

                  </div>
                </div>
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    </div>
  );
};




function App() {

  return (

    <Router>
      <Routes>

        {/*Home Page*/}
        <Route exact path="/" element={<Home/>}></Route>  


        {/*Start of Story 1*/}
        <Route exact path="/AAAAAA" element={<StoryOne  
        descrip = {des[0]}
        pass = "AAAAAA"
        image = {cave}
        three = {false}
        death = "continue"
        a = "Crawl Towards The Light" b = "Crawl Further Into the Cave" c = {null} 
        pathone = "/RAWRXD" pathtwo = "/Bleed" paththree = "/null" cont = "/"/>}>
        </Route>

        {/*Crawl towards light  */}
        <Route exact path="/RAWRXD" element={<StoryOne 
        descrip = {des[1]}
        pass = "RAWRXD"
        image = {doors}
        three = {true}
        death = "continue"
        a = "Go To The Window" b = "Go through the Left Door" c = "Go through the right door" 
        pathone = "/JIWDJW" pathtwo = "/QWEUDJ" paththree = "/CBSIWE" cont = "/"/>}>
        </Route>

        {/* Left Door */}
        <Route exact path="/QWEUDJ" element={<StoryOne 
        descrip = {des[16]}
        pass = "QWEUDJ"
        image = {corridor} 
        three = {false}
        death = "continue"
        a = "Stay where you are" b = "Run away from the sound" c = ""
        pathone = "/PADIKW" pathtwo = "/Sound" paththree = "/null" cont = "/"/>}>
        </Route>
        
        {/*Window */}
        <Route exact path="/JIWDJW" element={<StoryOne 
        descrip = {des[2]} 
        pass = "JIWDJW"
        image = {castle}
        three = {false}
        death = "continue"
        a = "Go through the left door" b = "Go through the right door" c = {null} 
        pathone = "/PADIKW" pathtwo = "/CBSIWE" paththree = "/null" cont = "/"/>}>
        </Route>
        
        {/* Fight */}
        <Route exact path="/PADIKW" element={<StoryOne 
        descrip ={des[11]}
        pass = "PADIKW"
        image = {fight} 
        three = {false} 
        death = "continue"
        a = "punch in torso" b = "punch in face" c = "urmom" 
        pathone = "/Torso" pathtwo = "/LLLPQW" paththree = "/null" cont = "/"/>}>
        </Route>
        
        {/* Punch In Face */}
        <Route exact path="/LLLPQW" element={<StoryOne 
        descrip = {des[12]}
        pass = "LLLPQW"
        image = {dark} 
        three = {false}
        death = "continue"
        a = "lean against the door and follow the wall around" b = "walk forwards blindly" c = ""
        pathone = "/NFIWTV" pathtwo = "/TIBLGA" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* walk forwards blindly */}
        <Route exact path="/TIBLGA" element={<StoryOne 
        descrip = {des[27]}
        pass = "TIBLGA"
        image = {door} 
        three = {false}
        death = "continue"
        a = "Go through door" b = "lean against the wall and follow it round" c = ""
        pathone = "/VGBVQQ" pathtwo = "/CBWOCW" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Lean against door */}
        <Route exact path="/NFIWTV" element={<StoryOne 
        descrip = {des[13]}
        pass = "NFIWTV"
        image = {lever} 
        three = {false}
        death = "continue"
        a = "continue against the wall" b = "pull the lever" c = ""
        pathone = "/DHWDGW" pathtwo = "/CBWOCW" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Pull the lever */}
        <Route exact path="/CBWOCW" element={<StoryOne 
        pass = "CBWOCW"
        descrip = {des[22]}
        image = {torch} 
        three = {false}
        death = "continue"
        a = "go through door in the side wall" b = "go through the door in the centre of the room" c = ""
        pathone = "/WEWEWE" pathtwo = "/VBGVQQ" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Side door */}
        <Route exact path="/WEWEWE" element={<StoryOne 
        pass = "WEWEWE"
        descrip = {des[23]}
        image = {staircase} 
        three = {false}
        death = "continue"
        a = "Go down staircase" b = "go back through door" c = ""
        pathone = "/Stair" pathtwo = "/DXDWDW" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Centre Door */}
        <Route exact path="/VBGVQQ" element={<StoryOne 
        pass = "VBGVQQ"
        descrip = {des[24]}
        image = {courtyard} 
        three = {false}
        death = "continue"
        a = "run as fast as you can away from the castle" b = "move carefully and quietly" c = ""
        pathone = "/JOJOPE" pathtwo = "/YETYWE" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* move carefully */}
        <Route exact path="/YETYWE" element={<StoryOne 
        pass = "YETYWE"
        descrip = {des[28]}
        image = {gate} 
        three = {false}
        death = "continue"
        a = "continue down main path" b = "go through side gate" c = ""
        pathone = "/UTYSSA" pathtwo = "/Side" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* main path*/}
        <Route exact path="/UTYSSA" element={<StoryOne 
        pass = "UTYSSA"
        descrip = {des[29]}
        image = {maze} 
        three = {false}
        death = "continue"
        a = "Past the knights" b = "Green Path" c = ""
        pathone = "/Knights" pathtwo = "/GSGUUI" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* run away from castle */}
        <Route exact path="/JOJOPE" element={<StoryOne 
        pass = "JOJOPE"
        descrip = {des[25]}
        image = {knights} 
        three = {false}
        death = "continue"
        a = "Left" b = "Right" c = ""
        pathone = "/Left" pathtwo = "/GSGUUI" paththree = "/null" cont = "/"/>}>
        </Route>

         {/* RIGHT */}
         <Route exact path="/GSGUUI" element={<StoryOne 
        pass = "GSGUUI"
        descrip = {des[26]}
        image = {maze} 
        three = {false}
        death = "continue"
        a = "Left" b = "Right" c = ""
        pathone = "/Paststatues" pathtwo = "/Right" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* continue against door */}
        <Route exact path="/DHWDGW" element={<StoryOne 
        descrip = {des[14]}
        pass = "DHWDGW"
        image = {staircase} 
        three = {false}
        death = "continue"
        a = "Go down the staircase" b = "go back through the door" c = ""
        pathone = "/Stair" pathtwo = "/DXDWDW" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Go back through door */}
        <Route exact path="/DXDWDW" element={<StoryOne 
        descrip = {des[15]}
        image = {staircase} 
        pass = "DXDWDW"
        three = {false}
        death = "continue"
        a = "Go down staircase" b = "Go down staircase" c = ""
        pathone = "/Stair" pathtwo = "/Stair" paththree = "/null" cont = "/Stair"/>}>
        </Route>

        

        {/* Right Door */}
        <Route exact path="/CBSIWE" element={<StoryOne  
        descrip ={des[3]} 
        image = {hall}
        pass = "CBSIWE"
        three = {false}
        death = "continue"
        a = "Climb the rubble towards the opening" b = "Crawl through the rubble to the entryway" c = "" 
        pathone = "/Hall" pathtwo = "/QLAMDS" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Kitchen */}
        <Route exact path="/QLAMDS" element={<StoryOne 
        descrip = {des[4]} 
        pass = "QLAMDS"
        image = {kitchen}
        three = {false}
        death = "continue"
        a = "Attempt to smash lock with frying pan" b = "Attempt to pry open lock with knife point" c = "urmom" 
        pathone = "/PLASJE" pathtwo = "/Knife" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Frying Pan */}
        <Route exact path="/PLASJE" element={<StoryOne 
        descrip = {des[5]} 
        pass = "PLASJE"
        image = {doortrees}
        three = {false}
        death = "continue"
        a = "Start Running as Fast as You Can" b = "Move Slowly" c = ""
        pathone = "/BQIDBE" pathtwo = "/MCLEWQ" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Move SLowly */}
        <Route exact path="/MCLEWQ" element={<StoryOne 
        pass = "MCLEWQ"
        descrip = {des[17]}
        image = {running} 
        three = {false}
        death = "continue"
        a = "run away from the forest" b = "hide amongst the trees" c = ""
        pathone = "/Deathforest" pathtwo = "/MPFWJD" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Hide amongst trees */}
        <Route exact path="/MPFWJD" element={<StoryOne 
        pass = "MPFWJD"
        descrip = {des[18]}
        image = {hide} 
        three = {false}
        death = "continue"
        a = "run" b = "keep trying to hide" c = ""
        pathone = "/MCNSCC" pathtwo = "/DDSFAS" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* run */}
        <Route exact path="/MCNSCC" element={<StoryOne 
        pass = "MCNSCC"
        descrip = {des[30]}
        image = {trees} 
        three = {false}
        death = "continue"
        a = "try to climb tree" b = "try to slip out of view and hide" c = ""
        pathone = "/Climb" pathtwo = "/CSDWWW" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* try to slip out of view and hide */}
        <Route exact path="/CSDWWW" element={<StoryOne 
        pass = "CSDWWW"
        descrip = {des[31]}
        image = {slip} 
        three = {false}
        death = "continue"
        a = "Try to crawl away slowly" b = "stay still" c = ""
        pathone = "/Crawl" pathtwo = "/Still" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Keep trying to hide */}
        <Route exact path="/DDSFAS" element={<StoryOne 
        pass = "DDSFAS"
        descrip = {des[20]}
        image = {throwpan} 
        three = {false}
        death = "continue"
        a = "Throw into the forest" b = "Throw at the monster" c = ""
        pathone = "/QQEWQQ" pathtwo = "/Monsterpan" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Throw into forest */}
        <Route exact path="/QQEWQQ" element={<StoryOne 
        pass = "QQEWQQ"
        descrip = {des[21]}
        image = {wolfpan} 
        three = {false}
        death = "continue"
        a = "start running as fast as you can the other way" b = "slip off quietly away from the monster" c = ""
        pathone = "/Runoppo" pathtwo = "/Slipoff" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Running */}
        <Route exact path="/BQIDBE" element={<StoryOne 
        descrip = {des[6]} 
        pass = "BQIDBE"
        image = {forest}
        three = {false}
        death = "continue"
        a = "Turn Around" b = "Keep Running" c = ""
        pathone = "/VDUWYD" pathtwo = "/Tired" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Turn Around */}
        <Route exact path="/VDUWYD" element={<StoryOne 
        descrip = {des[7]} 
        pass = "VDUWYD"
        image = {monster}
        three = {false}
        death = "continue"
        a = "Attempt to hit the monster with the frying pan" b = "Attempt to dodge the monster's dive" c = ""
        pathone = "/Pandeath" pathtwo = "/FTEISL" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Dodge */}
        <Route exact path="/FTEISL" element={<StoryOne 
        descrip = {des[8]}
        pass = "FTEISL"
        image = {dodge} 
        three = {false}
        death = "continue"
        a = "Hit the monster with the frying pan " b = "Start running away" c = ""
        pathone = "/Success" pathtwo = "/ENZBBB" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Start Running */}
        <Route exact path="/ENZBBB" element={<StoryOne 
        descrip = {des[9]} 
        pass = "ENZBBB"
        image = {opentrees}
        three = {false}
        death = "continue"
        a = "Run out of the forest" b = "Run towards the shack" c = ""
        pathone = "/Noforest" pathtwo = "/IIIYUJ" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Bleed */}
        <Route exact path="/Bleed" element={<StoryOne 
        descrip = {des[32]} 
        pass = "none"
        image = {dark}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Hall */}
        <Route exact path="/Hall" element={<StoryOne 
        descrip = {des[33]} 
        pass = "none"
        image = {dark}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Knife */}
        <Route exact path="/Knife" element={<StoryOne 
        descrip = {des[34]} 
        pass = "none"
        image = {victoryone}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Run away from forest ending */}
        <Route exact path="/Deathforest" element={<StoryOne 
        descrip = {des[35]} 
        pass = "none"
        image = {killone}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Keep Running end */}
        <Route exact path="/Tired" element={<StoryOne 
        descrip = {des[36]} 
        pass = "none"
        image = {killtwo}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Hit with pan */}
        <Route exact path="/Pandeath" element={<StoryOne 
        descrip = {des[37]} 
        pass = "none"
        image = {killthree}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Crawl */}
        <Route exact path="/Crawl" element={<StoryOne 
        descrip = {des[38]} 
        pass = "none"
        image = {killfour}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Stay Still */}
        <Route exact path="/Still" element={<StoryOne 
        descrip = {des[39]} 
        pass = "none"
        image = {victorytwo}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Run in opposite direction */}
        <Route exact path="/Runoppo" element={<StoryOne 
        descrip = {des[40]} 
        pass = "none"
        image = {killfour}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* slip off */}
        <Route exact path="/Slipoff" element={<StoryOne 
        descrip = {des[41]} 
        pass = "none"
        image = {victorythree}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* throw pan at monster */}
        <Route exact path="/Monsterpan" element={<StoryOne 
        descrip = {des[42]} 
        pass = "none"
        image = {killfive}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Ruined Shack */}
        <Route exact path="/Shack" element={<StoryOne 
        descrip = {des[43]} 
        pass = "none"
        image = {killedmonster}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Run out of forest */}
        <Route exact path="/Noforest" element={<StoryOne 
        descrip = {des[44]} 
        pass = "none"
        image = {killseven}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Climb Tree*/}
        <Route exact path="/Climb" element={<StoryOne 
        descrip = {des[45]} 
        pass = "none"
        image = {killsix}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Success hit */}
        <Route exact path="/Success" element={<StoryOne 
        descrip = {des[46]} 
        pass = "none"
        image = {victoryfour}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Hit in torso */}
        <Route exact path="/Torso" element={<StoryOne 
        descrip = {des[47]} 
        pass = "none"
        image = {dark}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* run from sound */}
        <Route exact path="/Sound" element={<StoryOne 
        descrip = {des[48]} 
        pass = "none"
        image = {dark}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Staircase */}
        <Route exact path="/Stair" element={<StoryOne 
        descrip = {des[49]} 
        pass = "none"
        image = {caged}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Left */}
        <Route exact path="/Left" element={<StoryOne 
        descrip = {des[50]} 
        pass = "none"
        image = {cornered}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Right */}
        <Route exact path="/Right" element={<StoryOne 
        descrip = {des[51]} 
        pass = "none"
        image = {corneredtwo}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Path with kngihts end */}
        <Route exact path="/Knights" element={<StoryOne 
        descrip = {des[52]} 
        pass = "none"
        image = {castlegate}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Green */}
        <Route exact path="/Green" element={<StoryOne 
        descrip = {des[53]} 
        pass = "none"
        image = {dark}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Side Path */}
        <Route exact path="/Side" element={<StoryOne 
        descrip = {des[54]} 
        pass = "none"
        image = {victoryfive}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>

        {/* Run past statues */}
        <Route exact path="/Paststatues" element={<StoryOne 
        descrip = {des[54]} 
        pass = "none"
        image = {castlegate}
        three = {false} 
        death = "deathpage"
        pathone = "/" pathtwo = "/" paththree = "/null" cont = "/"/>}>
        </Route>
         {/* Enter code */}
        <Route exact path="/password" element={<PwordPage/>}>
         </Route>

      </Routes>
    </Router>

  )}


export default App;
