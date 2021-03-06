const DomainURL = "https://backend.easycompany.space/";
const CreatePostURL = `${DomainURL}api/create_post/`;
const LogInURL = `${DomainURL}api/login/`;
const RegisterUserURL = `${DomainURL}api/registration/`;
const Host = "backend.easycompany.space";
const SearchURL = `${DomainURL}api/search_vector/`;
const PostURL = `${DomainURL}api/post/`;
const AnswersURL = `${DomainURL}api/solutions/`;
const PostListURL = `${DomainURL}api/list_post/`;
const UpVotePostURL = `${DomainURL}api/up_vote_post/`;
const DownVotePostURL = `${DomainURL}api/down_vote_post/`;
const UpVoteSolnURL = `${DomainURL}api/up_vote_solution/`;
const DownVoteSolnURL = `${DomainURL}api/down_vote_solution/`;
const UpVotePostCommentURL = `${DomainURL}api/up_vote_post_comment/`;
const DownVotePostCommentURL = `${DomainURL}api/down_vote_post_comment/`;
const UpVoteSolnCommentURL = `${DomainURL}api/up_vote_soln_comment/`;
const DownVoteSolnCommentURL = `${DomainURL}api/down_vote_soln_comment/`;
const AddSolnURL = `${DomainURL}api/create_solution/`;
const AddPostcommentURL = `${DomainURL}api/create_post_comment/`;
const AddSolncommentURL = `${DomainURL}api/create_solution_comment/`;
const PostCommentsURL = `${DomainURL}api/post_comments/`;
const SolutionCommentsURL = `${DomainURL}api/solution_comments/`;
const UserProfileURL = `${DomainURL}api/user_stats/`;
const UserPostsURL = `${DomainURL}api/user_posts/`;
const UserSolutionsURL = `${DomainURL}api/user_solns/`;
const PublicUserProfileURL = `${DomainURL}api/public_user_stats/`;
const PublicUserPostsURL = `${DomainURL}api/public_user_posts/`;
const PublicUserSolutionsURL = `${DomainURL}api/public_user_solns/`;
const PasswordResetPost = `${DomainURL}api/password/reset/confirm`;
const PasswordResetGet = `${DomainURL}api/password/reset/`;
const AcceptSolnURL = `${DomainURL}api/accept_soln/`;

const PageSize = 20;
const commentPageSize = 3;
const PageNumberLimit = 5;

export {
  CreatePostURL,
  Host,
  LogInURL,
  RegisterUserURL,
  SearchURL,
  PostURL,
  AnswersURL,
  PageSize,
  PostListURL,
  PageNumberLimit,
  UpVotePostURL,
  DownVotePostURL,
  UpVoteSolnURL,
  DownVoteSolnURL,
  UpVotePostCommentURL,
  DownVotePostCommentURL,
  UpVoteSolnCommentURL,
  DownVoteSolnCommentURL,
  AddSolnURL,
  AddPostcommentURL,
  AddSolncommentURL,
  PostCommentsURL,
  SolutionCommentsURL,
  commentPageSize,
  UserProfileURL,
  UserPostsURL,
  UserSolutionsURL,
  PublicUserProfileURL,
  PublicUserPostsURL,
  PublicUserSolutionsURL,
  PasswordResetPost,
  PasswordResetGet,
  AcceptSolnURL,
};
