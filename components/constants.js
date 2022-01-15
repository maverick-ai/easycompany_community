const CreatePostURL="http://127.0.0.1:8000/api/create_post/";
const LogInURL = "http://127.0.0.1:8000/api/login/";
const RegisterUserURL = "http://127.0.0.1:8000/api/registration/";
const Host="127.0.0.1:8000";
const SearchURL="http://127.0.0.1:8000/api/search_vector/";
const PostURL="http://127.0.0.1:8000/api/post/";
const AnswersURL="http://127.0.0.1:8000/api/solutions/";
const PostListURL="http://127.0.0.1:8000/api/list_post/"
const UpVotePostURL="http://127.0.0.1:8000/api/up_vote_post/"
const DownVotePostURL="http://127.0.0.1:8000/api/down_vote_post/"
const UpVoteSolnURL="http://127.0.0.1:8000/api/up_vote_solution/"
const DownVoteSolnURL="http://127.0.0.1:8000/api/down_vote_solution/"
const UpVotePostCommentURL="http://127.0.0.1:8000/api/up_vote_post_comment/"
const DownVotePostCommentURL="http://127.0.0.1:8000/api/down_vote_post_comment/"
const UpVoteSolnCommentURL="http://127.0.0.1:8000/api/up_vote_soln_comment/"
const DownVoteSolnCommentURL="http://127.0.0.1:8000/api/down_vote_soln_comments/"
const AddSolnURL = "http://127.0.0.1:8000/api/create_solution/"
const AddPostcommentURL= "http://127.0.0.1:8000/api/create_post_comment/"
const AddSolncommentURL= "http://127.0.0.1:8000/api/create_solution_comment/"
const PostCommentsURL="http://127.0.0.1:8000/api/post_comments/"
const SolutionCommentsURL="http://127.0.0.1:8000/api/solution_comments/"

const PageSize=3;
const commentPageSize=3;
const PageNumberLimit=5;

export {CreatePostURL,Host,LogInURL,RegisterUserURL,SearchURL,PostURL,AnswersURL,PageSize,PostListURL,PageNumberLimit,UpVotePostURL,DownVotePostURL,UpVoteSolnURL,DownVoteSolnURL,UpVotePostCommentURL,DownVotePostCommentURL,UpVoteSolnCommentURL,DownVoteSolnCommentURL, AddSolnURL,AddPostcommentURL,AddSolncommentURL,PostCommentsURL,SolutionCommentsURL,commentPageSize};