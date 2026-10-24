use serde::Deserialize;
use xiao::{AppHandle, XiaoCommand};

xiao::include_config!();

pub struct Greet;

#[derive(Deserialize)]
pub struct GreetArgs {
    name: String,
}

impl XiaoCommand for Greet {
    type Args = GreetArgs;
    type Output = String;

    fn name() -> &'static str { "greet" }

    fn execute(_app: &AppHandle, args: Self::Args) -> Result<Self::Output, String> { Ok(format!("Hello, {}! You've been greeted from Rust!", args.name)) }
}

pub fn run() { xiao::Shell::new(CONFIG_JSON, QML_ENTRY).commands(xiao::commands![Greet]).run(); }
