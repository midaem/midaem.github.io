// Console variables
var footerConsole = null;
var footerOutputText = '';
var nextCommand = '';

var inSupport = false;

var confirmPlay = false;
var confirmExit = false;
var confirmRestart = false;

function checkOnScroll() 
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        document.getElementById("top-button").style.opacity = 1;
        document.getElementById("top-button").style.pointerEvents = "auto";
    }
    else
    {
        document.getElementById("top-button").style.opacity = 0;
        document.getElementById("top-button").style.pointerEvents = "none";
    }
}

async function InteractiveConsole (_keycode)
{
    var newChar = String.fromCharCode(_keycode);

    if (_keycode == 13) //Enter
    {
        switch (nextCommand)
        {
            case '':
                newChar = '';
               break;

            case 'help':
                if (inSupport)
                {
                    newChar = '<br /><br />The following commands are available:<br /><br />"assets"<br />&emsp;Show all the assets.<br />"support"<br />&emsp;Show support info.<br />"play"<br />&emsp;Play a game.<br />"restart"<br />&emsp;Restart system.<br />"exit"<br />&emsp;Shut down system.<br />';
                }
                else
                {
                    newChar = '<br /><br />The following commands are available:<br /><br />"support"<br />&emsp;Show support info.<br />"play"<br />&emsp;Play a game.<br />"restart"<br />&emsp;Restart system.<br />"exit"<br />&emsp;Shut down system.<br />';
                }
            break;
        
            case 'play':
                newChar = '<br /><br />Do you want to play "Stars Nya? (y/n)';
                confirmPlay = true;
            break;
            case 'support':
                newChar = '<br /><br />For support please email us at <a href="mailto:support@midaem.com" style="text-decoration: underline;">support@midaem.com</a><br />We are happy to help!<br/>';
            break;
            case 'assets':
                if (inSupport)
                {
                    footerOutputText = '';
                    currentOutputElement.innerHTML = '';
                    ShowAssets();
                    inSupport = false;
                }
                else
                {
                    newChar = '<br />Unknown command: ' + nextCommand + '.<br/>Type "help" for a list of commands.';
                }
            break;

            case 'y':
            case 'yes':
                if(confirmPlay == true)
                {
                    newChar = '<br /><br />Starting "Stars Nya"...<br/><br/>For more info about the game visit <a href="https://mizugames.com/stars-nya/" style="text-decoration: underline;">https://mizugames.com/stars-nya/</a><br/>We hope you enjoy our little game... Have fun!<br />';
                    PlayStarsNya();
                    confirmPlay = false;
                }
                else if(confirmRestart == true)
                {
                    RestartSystem();
                    footerOutputText = '';
                    confirmRestart = false;
                }
                else if(confirmExit == true)
                {
                    TurnOffSystem();
                    confirmExit = false;
                }
                else
                {
                    newChar = '<br />Unknown command: ' + nextCommand + '.<br/>Type "help" for a list of commands.';
                }
            break;

            case 'n':
            case 'no':
                if(confirmPlay == true)
                {
                    newChar = '<br />Failed to start game (Operation aborted).';
                    confirmPlay = false;
                }
                else if(confirmRestart == true)
                {
                    newChar = '<br />Failed to restart (Operation aborted).';
                    confirmRestart = false;
                }
                else if(confirmExit == true)
                {
                    newChar = '<br />Failed to shutting down (Operation aborted).';
                    confirmExit = false;
                }
                else
                {
                    newChar = '<br />Unknown command: ' + nextCommand + '.<br/>Type "help" for a list of commands.';
                }
            break;

            case 'restart':
                newChar = '<br /><br />Are you sure you want to restart the system? (y/n)';
                confirmRestart = true;
            break;

            case 'exit':
            case 'shutdown':
            case 'off':
                newChar = '<br /><br />Are you sure you want to shut down the system? (y/n)';
                confirmExit = true;
            break;

            default:
                if((confirmPlay == true) || (confirmExit == true) || (confirmRestart == true))
                {
                    newChar = '<br />Command failed (Unknown option "' + nextCommand + '").';
                    confirmPlay = false;
                    confirmExit = false;
                    confirmRestart = false;
                }
                else
                {
                    newChar = '<br />Unknown command: ' + nextCommand + '.<br/>Type "help" for a list of commands.';
                }
                break;
        }

        footerOutputText += newChar + '<br /> > ';
        nextCommand = '';
        footerConsole.innerHTML = footerOutputText + '<span class="console-cursor">||</span>';
    }
    else if(_keycode == 8) //backspace
    {
        if(nextCommand.length > 0)
        {
            nextCommand = nextCommand.slice(0, -1);
            footerOutputText = footerOutputText.slice(0, -1);
            footerConsole.innerHTML = footerOutputText + '<span class="console-cursor">||</span>';
        }
    }
    else 
    {
        if (/^[a-zA-Z0-9\-\_\s]+$/i.test(newChar))
        {
            nextCommand += newChar;
            footerOutputText += newChar;
            footerConsole.innerHTML = footerOutputText + '<span class="console-cursor">||</span>';
        }
    }
    window.scrollTo(0,document.body.scrollHeight);
}

function StartInteractiveConsole (section)
{
    footerConsole = document.getElementById("footer-console");

    footerConsole.style.display = "block";

    switch (section)
    {
        case 'home':
            var targetElements = document.getElementsByClassName('asset');
            var assetsCount = targetElements.length;
            footerOutputText = 'The command completed successfully.<br />Total: '+ assetsCount + ' Asset(s)<br /><br />Please insert a new command<br />Type "help" for a list of commands.<br />> ';
           break;
        case 'support':
            footerOutputText = '<br />For support please email us at <a href="mailto:support@midaem.com" style="text-decoration: underline;">support@midaem.com</a><br />We are happy to help!<br/><br /><br />Please insert a new command<br />Type "help" for a list of commands.<br />> ';
            footerConsole.style.alignSelf = "flex-start";
            inSupport = true;
            break;
        default:
            footerOutputText = 'Please insert a new command<br /><br/>Type "help" for a list of commands.<br />> ';
            break;
    }

    footerConsole.innerHTML = footerOutputText + '<span class="console-cursor">||</span>';

    document.onkeypress = function(evt) {
        evt = evt || window.event;
        InteractiveConsole(evt.keyCode);
    };
    document.onkeydown = function(evt) { //backspace
        evt = evt || window.event;
        if(evt.keyCode == 8)
        {
            InteractiveConsole(8);
        }
    }
}

async function RestartSystem()
{
    currentOutputElement.innerHTML = '';
    document.onkeypress = null;
    document.onkeydown = null;
    AnimationEngine(restart_animation, "footer-console");
}

async function TurnOffSystem()
{
    document.onkeypress = null;
    document.onkeydown = null;
    AnimationEngine(exit_animation, "footer-console");
}

async function PlayStarsNya()
{
    window.open("https://mizugames.com/PlayStarsNya/", '_blank');
}

function InitCore () 
{
    var subpage = window.location.search.substring(1);
    window.onscroll = function() {checkOnScroll()};
    if (subpage)
    {
        switch (subpage)
        {
            case 'support':
                setTimeout(() => { AnimationEngine(intro_animation_support, "main-console"); }, 1000);
               break;
            default:
                setTimeout(() => { AnimationEngine(intro_animation, "main-console"); }, 1000);
                break;
        }
    }
    else
    {
        setTimeout(() => { AnimationEngine(intro_animation, "main-console"); }, 1000);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    InitCore();
});

