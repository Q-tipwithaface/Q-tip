echo "Using conditional statement to create a project directory and project"

# Variable section
export project_dir=$HOME/vscode  # change vscode to different name to test git clone
export project=$project_dir/APCSP  # change APCSP to name of project from git clone
export project_repo="https://github.com/nighthawkcoders/APCSP.git"  # change to project of choice

cd ~    # start in home directory

# Conditional block to make a project directory
if [ ! -d $project_dir ]
    echo "Directory $project_dir does exist, not making new one"
then 
    echo "Directory $project_dir does not exists... making directory $project_dir"
    mkdir -p $project_dir
fi
echo "Directory $project_dir exists." 

# Conditional block to git clone a project from project_repo
if [ ! -d $project ]
then
    echo "Directory $project does not exists... cloning $project_repo"
    cd $project_dir
    git clone $project_repo
    cd ~
fi
echo "Directory $project exists."

echo "Navigate to project, then navigate to area wwhere files were cloned"
cd $project
pwd

echo ""
echo "list top level or root of files with project pulled from github"
ls

echo ""
echo "list again with hidden files pulled from github"
ls -a   # hidden files flag, many shell commands have flags

echo ""
echo "list all files in long format"
ls -al   # all files and long listing
echo "Look for posts"
export posts=$project/_posts  # _posts inside project
cd $posts  # this should exist per fastpages
pwd  # present working directory
ls -l  # list posts
echo "Look for notebooks"
export notebooks=$project/_notebooks  # _notebooks is inside project
cd $notebooks   # this should exist per fastpages
pwd  # present working directory
ls -l  # list notebooks
echo "Look for images in notebooks, print working directory, list files"
cd $notebooks/images  # this should exist per fastpages
pwd
ls -l

echo "Navigate to project, then navigate to area wwhere files were cloned"

cd $project
echo "show the contents of README.md"
echo ""

cat README.md  # show contents of file, in this case markdown
echo ""
echo "end of README.md"

echo "Show the shell environment variables, key on left of equal value on right"
echo ""

env
cd $project

echo ""
echo "show the secrets of .git"
cd .git
ls -l

echo ""
echo "look at config file"
cat config