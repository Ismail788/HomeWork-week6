function fetchData(getSearch,getBtn){
var req=new XMLHttpRequest;
req.addEventListener('load',function(){
if(200===this.status){
var e=c.responseText,
f=JSON.parse(e);
getsearch(name)
}else console.log('Something is probably wrong with the url')}),
req.addEventListener('error',function(){
console.log('Server error like timeout')}),
req.open('GET',url),
req.send()
}
console.log('url');

function fetchRepos(){
fetchData('https://api.github.com/orgs/HackYourFuture/repos',showRepositories())}
function searchRepositories(getSearch){
fetchData('https://api.github.com/search/repositories?q=user:HackYourFuture+'+SearchTerm,
function(req){
showRepositories(getSearch.items)})}
function showRepositories(getSearch){
var getBtn=document.querySelector('#showResult');
if(getBtn.innerHTML='',0 === getSearch.length){
var getBtn=document.createElement('li');
getSearch.appendChild(req),
req.innerHTML='<span style="color:red">No repository was found for this search term.</span>'}
else{
var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;
try{
  for(var e,_loop=function(){
var f=e.value,
url=document.createElement('li');
showResult.appendChild(li),
g.innerHTML='<a href="'+f.url+'" target="_blank">'+f.url+'</a>',
g.addEventListener('click',function(h){
h.preventDefault(),
showRepositoryDetails(f)})},
d=a[Symbol.iterator]();
!(_iteratorNormalCompletion=(e=d.next()).done);
_iteratorNormalCompletion=!0)_loop()}catch(f){_didIteratorError=!0,_iteratorError=f}
finally{try{!_iteratorNormalCompletion&&d.return&&d.return()}
finally{
if(_didIteratorError)throw _iteratorError}}}}
function showRepositoryDetails(a){
document.querySelector('#repositoryDetails').style.display='block',
document.querySelector('#repoName').innerHTML='<a href="'+a.html_url+'" target="_blank">'+a.name+'</a>',
showCommits(a)
}
function hideRepositoryDetails(){
document.querySelector('#repositoryDetails').style.display='none'
}
function showCollaborators(a){
var b='https://api.github.com/repos/'+a.owner.login+'/'+a.name+'/collaborators?access_token='+apiKey,
c=document.querySelector('#collaborators');
c.innerHTML='',
fetchData(b,function(d){
  console.log(d)})}
function showCommits(a){
var b='https://api.github.com/repos/'+a.owner.login+'/'+a.name+'/commits',
c=document.querySelector('#commits');
c.innerHTML='',
fetchData(b,function(d){
var _iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;
try{
  for(var f,e=d[Symbol.iterator]();
!(_iteratorNormalCompletion2=(f=e.next()).done);_iteratorNormalCompletion2=!0){
var g=f.value,h=document.createElement('div');
showResult.appendChild(h),h.innerHTML='\n                <div class="row">\n                    \n                    <a href="'+g.author.html_url+'" target="_blank">\n                        <img style="width:50px;" src="'+g.author.avatar_url+'" class="img-circle">\n                        '+g.commit.author.name+' - '+g.author.login+'\n                    </a>\n                </div>\n                <a href="'+g.html_url+'">'+g.commit.author.date+'<br/> '+g.commit.message+'</a>\n                <hr>\n            '}}catch(i){_didIteratorError2=!0,_iteratorError2=i}finally{try{!_iteratorNormalCompletion2&&e.return&&e.return()}finally{if(_didIteratorError2)throw _iteratorError2}}})}var myButton=document.querySelector('#myButton'),userInput=document.querySelector('#userInput'),myButtonClickHandler=function(){hideRepositoryDetails();var a=userInput.value;searchRepositories(a)};myButton.addEventListener('click',myButtonClickHandler),hideRepositoryDetails();
