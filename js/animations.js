var intro_animation = new Array(
    [["add_class","h-on-off-logo","turn-on-button-animation"]],
    [["wait", 100]],
    [["add_class","header-bg","fade-in-blink"], ["add_class","main-screen-bg","fade-in-blink"], ["add_class","footer-bg","fade-in-blink"]],
    [["wait",1500]],
    [["clear_output", 1]],
    [["wait",1000]],
    [["add_text", "MiDaEm Os [v2.018a] <br />"]],
    [["wait", 200]],
    [["add_text", "Loading Core System"]],
    [["wait", 500]],
    [["change_type_speed", 500]],
    "...",
    [["display_none", "bg-h-on-off-logo"]],
    [["wait", 200]],
    [["clear_output", 1]],
    [["wait", 200]],
    [["add_text", "Welcome to MiDaEm OS. <br />"]],
    [["wait", 50]],
    [["add_text", "> "]],
    [["wait", 1250]],
    [["change_type_speed", 100]],
    "run ./midaem.com",
    [["wait", 1000]],
    [["add_text", "Loading midaem.com"]],
    [["change_type_speed", 400]],
    "...",
    [["change_type_speed", 50]],
    [["add_text", "Loading complete!"]],
    [["add_class","h-img-logo","fade-in-1"]],
    [["add_class","h-button-store","fade-in-h-button-top-left"]],
    [["wait", 100]],
    [["add_class","h-button-mizugames","fade-in-h-button-top-right"]],
    [["wait", 100]],
    [["add_class","h-button-market","fade-in-h-button-bottom-left"]],
    [["wait", 100]],
    [["add_class","h-button-support","fade-in-h-button-bottom-right"]],
    [["wait", 100]],
    [["wait", 500]],
    [["clear_output", 1]],
    [["delete_cursor"]],
    [["display_block","console-permanent"]],
    [["wait", 500]],
    [["show_assets"]]
    );

var intro_animation_support = new Array(
    [["add_class","h-on-off-logo","turn-on-button-animation"]],
    [["wait", 100]],
    [["add_class","header-bg","fade-in-blink"], ["add_class","main-screen-bg","fade-in-blink"], ["add_class","footer-bg","fade-in-blink"]],
    [["wait",1500]],
    [["clear_output", 1]],
    [["wait",1000]],
    [["add_text", "MiDaEm Os [v2.018a] <br />"]],
    [["wait", 200]],
    [["add_text", "Loading Core System"]],
    [["wait", 500]],
    [["change_type_speed", 500]],
    "...",
    [["display_none", "bg-h-on-off-logo"]],
    [["wait", 200]],
    [["clear_output", 1]],
    [["wait", 200]],
    [["add_text", "Welcome to MiDaEm OS. <br />"]],
    [["wait", 50]],
    [["add_text", "> "]],
    [["wait", 1250]],
    [["change_type_speed", 100]],
    "run ./midaem.com",
    [["wait", 1000]],
    [["add_text", "Loading midaem.com"]],
    [["change_type_speed", 400]],
    "...",
    [["change_type_speed", 50]],
    [["add_text", "Loading complete!"]],
    [["add_class","h-img-logo","fade-in-1"]],
    [["add_class","h-button-store","fade-in-h-button-top-left"]],
    [["wait", 100]],
    [["add_class","h-button-mizugames","fade-in-h-button-top-right"]],
    [["wait", 100]],
    [["add_class","h-button-market","fade-in-h-button-bottom-left"]],
    [["wait", 100]],
    [["add_class","h-button-support","fade-in-h-button-bottom-right"]],
    [["wait", 100]],
    [["wait", 500]],
    [["clear_output", 1]],
    [["add_text", "> "]],
    [["wait", 1250]],
    [["change_type_speed", 100]],
    "support",
    [["wait", 1000]],
    [["delete_cursor"]],
    [["show_support"]]
    );

var restart_animation = new Array(
    [["clear_output", 1]],
    [["add_text", "The system is about to restart.<br />"]],
    [["add_text", "In"]],
    [["wait", 1000]],
    [["clear_chars", 2]],
    [["add_text", "In 3"]],
    [["wait", 1000]],
    [["clear_chars", 4]],
    [["add_text", "In 2"]],
    [["wait", 1000]],
    [["clear_chars", 4]],
    [["add_text", "In 1"]],
    [["wait", 1000]],
    [["clear_chars", 4]],
    [["add_text", "Restarting...<br />"]],
    [["wait", 500]],
    [["add_class","screen-container","fade-out-2s"],["add_class","top-button-container","fade-out-2s"]],
    [["wait", 2000]],
    [["reload"]]
    );

var exit_animation = new Array(
    [["clear_output", 1]],
    [["add_text", "The system is shutting down.<br />"]],
    [["add_text", "Subsystems"]],
    [["wait", 300]],
    [["clear_chars", 10]],
    [["add_text", "Subsystems."]],
    [["wait", 300]],
    [["clear_chars", 11]],
    [["add_text", "Subsystems.."]],
    [["wait", 300]],
    [["clear_chars", 12]],
    [["add_text", "Subsystems..."]],
    [["wait", 300]],
    [["clear_chars", 13]],
    [["add_text", "Subsystems... Stopped.<br />"]],
    [["wait", 300]],
    [["add_text", "Flux capacitor"]],
    [["wait", 300]],
    [["clear_chars", 14]],
    [["add_text", "Flux capacitor."]],
    [["wait", 300]],
    [["clear_chars", 15]],
    [["add_text", "Flux capacitor.."]],
    [["wait", 300]],
    [["clear_chars", 16]],
    [["add_text", "Flux capacitor..."]],
    [["wait", 300]],
    [["clear_chars", 17]],
    [["add_text", "Flux capacitor... Offline.<br />"]],
    [["wait", 300]],
    [["add_text", "Core System"]],
    [["wait", 300]],
    [["clear_chars", 11]],
    [["add_text", "Core System."]],
    [["wait", 300]],
    [["clear_chars", 12]],
    [["add_text", "Core System.."]],
    [["wait", 300]],
    [["clear_chars", 13]],
    [["add_text", "Core System..."]],
    [["wait", 300]],
    [["clear_chars", 14]],
    [["add_text", "Core System... Stopped.<br /><br />"]],
    [["change_type_speed", 50]],
    "Shutdown completed.",
    [["add_text", "<br />"]],
    [["change_type_speed", 120]],
    '"See you soon."',
    [["wait", 1000]],
    [["add_class","screen-container","fade-out-2s"],["add_class","top-button-container","fade-out-2s"]],
    [["wait", 2000]],
    [["wait", 3000]],
    [["reload"]]
    );

// ANIMATIONS VARIABLES
var currentAnimationObject = null;

var animationTotalFrames = 0
var currentFrameIndex = 0;
var currentFrameObject = [];


// TYPEWRITTER VARIABLES
const DEFAULT_TYPE_SPEED = 50;
const DEFAULT_NEW_LINE_WAIT = 300;

var typeSpeed = DEFAULT_TYPE_SPEED;
var newLineWait = DEFAULT_NEW_LINE_WAIT;

var outputText = '';
var currentOutputElement = null;

// FUNCTIONS

function AnimationEngine(_animationArray = null, _textOutputElement = null, _clearLastOutput = true)
{
    if(_animationArray != null)
    {
        // INIT
        currentAnimationObject = _animationArray;
        animationTotalFrames = currentAnimationObject.length - 1;
        currentOutputElement = document.getElementById(_textOutputElement);

        currentFrameIndex = 0;

        if(_clearLastOutput == true)
        {
            outputText = '';
        }
        PlayCurrentFrame();
    }
}

async function PlayCurrentFrame () 
{
    currentFrameObject = currentAnimationObject[currentFrameIndex];

    if(Array.isArray(currentFrameObject))
    {
        for (var index = 0; index < currentFrameObject.length; index++)
        {
            parameter = currentFrameObject[index];
            switch (parameter[0])
            {
                case "animate":
                    alert("animate "+ parameter[1]);
                    break;
            
                case "clear_output":
                    outputText = '';
                    currentOutputElement.innerHTML = outputText + '<span class="console-cursor">||</span>';
                    break;
            
                case "add_text":
                    outputText += parameter[1];
                    currentOutputElement.innerHTML = outputText + '<span class="console-cursor">||</span>';
                    break;

                case "clear_chars":
                    outputText = outputText.slice(0, -parameter[1]);
                    break;
                
                case "change_type_speed":
                    typeSpeed = parameter[1];
                    break;
                
                case "wait":
                    await sleep(parameter[1]);
                    break;

                case "add_class":
                    var targetName = parameter[1];
                    var classToAdd = parameter[2];
                    
                    var targetElements = document.getElementsByClassName(targetName);
                    for(var i = 0; i < targetElements.length; i++)
                    {
                        targetElements.item(i).className += " " + classToAdd;
                    }
                    break;

                case "display_block":
                    var targetName = parameter[1];
                    var targetElements = document.getElementsByClassName(targetName);
                    for(var i = 0; i < targetElements.length; i++)
                    {
                        targetElements.item(i).style.display = 'block';
                    }
                    break;

                case "display_none":
                    var targetName = parameter[1];
                    var targetElements = document.getElementsByClassName(targetName);
                    for(var i = 0; i < targetElements.length; i++)
                    {
                        targetElements.item(i).style.display = 'none';
                    }
                    break;
                
                case "delete_cursor":
                    var cursor = currentOutputElement.getElementsByClassName("console-cursor")[0];
                    currentOutputElement.removeChild(cursor);
                    break;
                
                case "show_assets":
                    ShowAssets();
                    break;

                case "show_support":
                    ShowSupport();
                    break;

                case "reload":
                    location.reload();
                    break;

                default:
                    break;
            }
        }

        NextFrame();
    }
    else
    {
        currentFrameObject = Array.from(currentFrameObject);
        TypeWritter();
    }
}

function NextFrame ()
{
    currentFrameIndex++;
    if (currentFrameIndex <= animationTotalFrames)
    {
        PlayCurrentFrame();
    }
}

function TypeWritter()
{
    var nextChar = '';
    if(currentFrameObject.length > 0)
    {
        nextChar = currentFrameObject.shift();
        outputText += nextChar;
        setTimeout(() => { TypeWritter(); }, typeSpeed);
    }
    else
    {
        nextChar = '<br />';
        outputText += nextChar;
        setTimeout(() => { NextFrame(); }, newLineWait);
    }
    currentOutputElement.innerHTML = outputText + '<span class="console-cursor">||</span>';
}

function sleep(_ms) 
{
    return new Promise(resolve => setTimeout(resolve, _ms));
}

async function ShowAssets()
{
    window.scrollTo(0,0);
    await sleep(500);
    var targetElements = document.getElementsByClassName("console-permanent");
    for(var i = 0; i < targetElements.length; i++)
    {
        targetElements.item(i).style.display = 'block';
    }
    var maxElementsFadeIn = 16;
    var targetElements = document.getElementsByClassName('asset');

    for(var i = 0; i < targetElements.length; i++)
    {
        if(i <= maxElementsFadeIn)
        {
            targetElements.item(i).style.display = 'block';
            await sleep(10);
            targetElements.item(i).style.opacity = "1.0";
            await sleep(100);
        }
        else
        {
            targetElements.item(i).style.display = 'block';
            targetElements.item(i).style.opacity = "1.0";
        }
    }
    StartInteractiveConsole('home');
}

async function ShowSupport()
{
    //document.querySelectorAll('.asset').forEach(function(asset){asset.remove()})
    //document.querySelectorAll('.console-permanent').forEach(function(asset){asset.remove()})
    StartInteractiveConsole('support');
}

