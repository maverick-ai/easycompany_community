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
const DownVoteSolnCommentURL="http://127.0.0.1:8000/api/down_vote_soln_comment/"
const AddSolnURL = "http://127.0.0.1:8000/api/create_solution/"
const AddPostcommentURL= "http://127.0.0.1:8000/api/create_post_comment/"
const AddSolncommentURL= "http://127.0.0.1:8000/api/create_solution_comment/"
const PostCommentsURL="http://127.0.0.1:8000/api/post_comments/"
const SolutionCommentsURL="http://127.0.0.1:8000/api/solution_comments/"
const UserProfileURL="http://127.0.0.1:8000/api/user_stats/"
const UserPostsURL="http://127.0.0.1:8000/api/user_posts/"
const UserSolutionsURL="http://127.0.0.1:8000/api/user_solns/"
const PublicUserProfileURL="http://127.0.0.1:8000/api/public_user_stats/"
const PublicUserPostsURL="http://127.0.0.1:8000/api/public_user_posts/"
const PublicUserSolutionsURL="http://127.0.0.1:8000/api/public_user_solns/"
const PasswordResetPost="http://127.0.0.1:8000/api/password/reset/confirm/"
const PasswordResetGet="http://127.0.0.1:8000/api/password/reset/"

const PageSize=3;
const commentPageSize=3;
const PageNumberLimit=5;

export {CreatePostURL,Host,LogInURL,RegisterUserURL,SearchURL,PostURL,AnswersURL,PageSize,PostListURL,PageNumberLimit,UpVotePostURL,DownVotePostURL,UpVoteSolnURL,DownVoteSolnURL,UpVotePostCommentURL,DownVotePostCommentURL,UpVoteSolnCommentURL,DownVoteSolnCommentURL, AddSolnURL,AddPostcommentURL,AddSolncommentURL,PostCommentsURL,SolutionCommentsURL,commentPageSize,UserProfileURL,UserPostsURL,UserSolutionsURL,PublicUserProfileURL,PublicUserPostsURL,PublicUserSolutionsURL,PasswordResetPost,PasswordResetGet};