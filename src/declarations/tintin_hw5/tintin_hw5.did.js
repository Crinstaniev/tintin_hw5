export const idlFactory = ({ IDL }) => {
  const Time = IDL.Int;
  const Message = IDL.Record({
    'text' : IDL.Text,
    'time' : Time,
    'author' : IDL.Text,
  });
  return IDL.Service({
    '_call_get_name' : IDL.Func([IDL.Principal], [IDL.Opt(IDL.Text)], []),
    '_call_posts' : IDL.Func([IDL.Principal, Time], [IDL.Vec(Message)], []),
    'clean' : IDL.Func([], [], []),
    'follow' : IDL.Func([IDL.Principal], [], []),
    'follows' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'get_name' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
    'post' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'posts' : IDL.Func([Time], [IDL.Vec(Message)], ['query']),
    'set_name' : IDL.Func([IDL.Text], [], []),
    'timeline' : IDL.Func([Time], [IDL.Vec(Message)], []),
  });
};
export const init = ({ IDL }) => { return []; };
